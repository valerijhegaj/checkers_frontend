import {CreateUserActionCreator} from "../../usingRedux/redusers/createUserReducer";
import Connect from "../../redux/react-redux/Consumer";
import CreateUser from "./createUser";

const mapStateToProps = (state) => {
  return {
    state: state.createUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (username, password) => {
      dispatch(CreateUserActionCreator(username, password))
    }
  }
}

const CreateUserContainer = Connect(mapStateToProps, mapDispatchToProps)(CreateUser)

export default CreateUserContainer