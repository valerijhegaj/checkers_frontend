import Login from "./login";
import {LoginActionCreator} from "../../usingRedux/redusers/loginReducer";
import Connect from "../../redux/react-redux/Connect";

const mapStateToProps = (state) => {
  return {
    state: state.login
  }
}

const mapDispatchToProps = {
  update: LoginActionCreator
}

const LoginContainer = Connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer