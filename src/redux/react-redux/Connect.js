import MyContext from "./Provider";
import React from "react"

const defaultMap = () => {
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

const Connect = (mapStateToProps = defaultMap,
                 mapDispatchToProps = defaultMap) => (Component) => {
  class Container extends React.Component {
    constructor(props) {
      super(props)

      const store = this.props.store
      this._dispatch = store.Dispatch.bind(store)
    }

    render() {
      const stateProps = mapStateToProps(this._getState())
      const dispatchProps = mapDispatchToProps(this._dispatch)
      return (
        <Component {...this.props} {...stateProps} {...dispatchProps}/>
      )
    }

    componentDidMount() {
      this._unsubscribe = this.props.store.Subscribe(this._handleChange.bind(this))
    }

    componentWillUnmount() {
      this._unsubscribe()
    }

    _handleChange() {
      this.forceUpdate()
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

export default Connect
