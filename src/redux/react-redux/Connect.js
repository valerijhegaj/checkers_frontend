import MyContext from "./Provider";

const Connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (component) => {
  const componentWithProps = (props) => (store) => {
    const stateProps = mapStateToProps(store.GetState())
    const dispatchProps = mapDispatchToProps(store.Dispatch.bind(store))
    props = {...props, ...stateProps, ...dispatchProps}
    return component(props)
  }

  return (props) => {
    return <MyContext.Consumer>
      {componentWithProps(props)}
    </MyContext.Consumer>
  }
}

export default Connect
