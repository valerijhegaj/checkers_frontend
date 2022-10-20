import MyContext from "./Provider";
import React from "react"

const defaultMap = () => {
}

//
const Connect = (mapStateToProps = defaultMap,
                 mapDispatchToProps = defaultMap) => (Component) => {
  class Container extends React.Component {
    constructor(props) {
      super(props)

      const store = this.props.store

      this.state = this.props.store.GetState()
      this._dispatch = store.Dispatch.bind(store)

      this.dispatchProps = this.createDispatchProps()
    }

    createDispatchProps() {
      if (typeof(mapDispatchToProps) == 'function') {
        return mapDispatchToProps(this._dispatch)
      } else {
        let dispatchProps = {}
        for (let key in mapDispatchToProps) {
          const actionCreator = mapDispatchToProps[key]
          dispatchProps[key] = (...args) => {
            this._dispatch(actionCreator(...args))
          }
        }
        return dispatchProps
      }
    }

    render() {
      const stateProps = mapStateToProps(this.state)
      return (
        <Component {...this.props} {...stateProps} {...this.dispatchProps}/>
      )
    }

    componentDidMount() {
      this._unsubscribe = this.props.store.Subscribe(this._handleChange.bind(this))
    }

    componentWillUnmount() {
      this._unsubscribe()
    }

    _handleChange() {
      this.setState(this._getState())
    }

    _getState() {
      return this.props.store.GetState()
    }
  }

  return props => {
    return <MyContext.Consumer>
      {store => <Container {...props} store={store}/>}
    </MyContext.Consumer>
  }
}

// legacy
// const ConnectWithoutSubscribe = (mapStateToProps = defaultMap,
//                                  mapDispatchToProps = defaultMap
// ) => (component) => {
//   const componentWithProps = (props) => (store) => {
//     const stateProps = mapStateToProps(store.GetState())
//     const dispatchProps = mapDispatchToProps(store.Dispatch.bind(store))
//     props = {...props, ...stateProps, ...dispatchProps}
//     return component(props)
//   }
//
//   return (props) => {
//     return <MyContext.Consumer>
//       {componentWithProps(props)}
//     </MyContext.Consumer>
//   }
// }

export default Connect
