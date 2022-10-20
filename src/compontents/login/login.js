import {LoginActionCreator} from "../../usingRedux/redusers/loginReducer";

const Login = (props) => {

  return (
    <div>
      <input type="text" value={props.state.username} onChange={event => {
        props.dispatch(LoginActionCreator(event.target.value, props.state.password))
      }}></input>
      <input value={props.state.password} onChange={event => {
        props.dispatch(LoginActionCreator(props.state.username, event.target.value))
      }}></input>
      <button>login</button>
    </div>
  )
}

export default Login