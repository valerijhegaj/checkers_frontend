import {CreateUserActionCreator} from "../../usingRedux/redusers/createUserReducer";
import CreateUser from "./createUser";

const CreateUserContainer = (props) => {
  return (
    <CreateUser state={props.state} update={(username, password) => {
      props.dispatch(CreateUserActionCreator(username, password))
    }}/>
  )
}

export default CreateUserContainer