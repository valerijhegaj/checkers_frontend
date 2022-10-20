import Login from "./login";
import {update} from "../../usingRedux/redusers/loginReducer";
import Connect from "../../redux/react-redux/Connect";

const mapStateToProps = (state) => {
  return {
    state: state.login
  }
}

const LoginContainer = Connect(mapStateToProps, {update})(Login)

export default LoginContainer