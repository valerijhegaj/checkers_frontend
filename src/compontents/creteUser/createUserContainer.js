import {update} from "../../usingRedux/redusers/createUser";
import Connect from "../../redux/react-redux/Connect";
import CreateUser from "./createUser";

const mapStateToProps = (state) => {
  return {
    state: state.createUser
  }
}

const CreateUserContainer = Connect(mapStateToProps, {update})(CreateUser)

export default CreateUserContainer