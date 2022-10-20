import Login from "./login";
import {LoginActionCreator} from "../../usingRedux/redusers/loginReducer";

const LoginContainer = (props) => {
  return (
    <Login state={props.state} update={(username, password) => {
      props.dispatch(LoginActionCreator(username, password))
    }}/>
  )
}

export default LoginContainer