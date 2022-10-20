import Login from "./login";
import {LoginActionCreator} from "../../usingRedux/redusers/loginReducer";
import Connect from "../../redux/react-redux/Consumer";

const mapStateToProps = (state) => {
  return {
    state: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (username, password) => {dispatch(LoginActionCreator(username, password))}
  }
}

const LoginContainer = Connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer