import MyContext from "./Provider";

const Connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (component) => {
  const componentWithProps = (store) => {
    let props = {}
    const stateProps = mapStateToProps(store.GetState())
    for (let key in stateProps) {
      props[key] = stateProps[key]
    }
    const dispatchProps = mapDispatchToProps(store.Dispatch.bind(store))
    for (let key in dispatchProps) {
      props[key] = dispatchProps[key]
    }
    return component(props)
  }

  return () => {

    return <MyContext.Consumer>
      {componentWithProps}
    </MyContext.Consumer>
  }
}

export default Connect
