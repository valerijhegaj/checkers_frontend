import MyContext from "./Provider";

const Connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (component) => {
  const componentWithProps = (store) => {
    const stateProps = mapStateToProps(store.GetState())
    const dispatchProps = mapDispatchToProps(store.Dispatch.bind(store))
    let props = {...stateProps, ...dispatchProps}
    return component(props)
  }

  return () => {
    return <MyContext.Consumer>
      {componentWithProps}
    </MyContext.Consumer>
  }
}

export default Connect
