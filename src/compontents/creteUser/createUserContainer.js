import {CreateUserActionCreator} from "../../usingRedux/redusers/createUserReducer";
import Connect from "../../redux/react-redux/Connect";
import CreateUser from "./createUser";

const mapStateToProps = (state) => {
  return {
    state: state.createUser
  }
}

const mapDispatchToProps = {
  update: CreateUserActionCreator
}

const CreateUserContainer = Connect(mapStateToProps, mapDispatchToProps)(CreateUser)

export default CreateUserContainer