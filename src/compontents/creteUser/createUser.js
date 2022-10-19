import {CreateUserActionCreator} from "../../redux/state";

const CreateUser = (props) => {
  return (
    <div>
      <input type="text" value={props.state.username} onChange={event => {
        props.dispatch(CreateUserActionCreator(event.target.value, props.state.password))
      }}></input>
      <input value={props.state.password} onChange={event => {
        props.dispatch(CreateUserActionCreator(props.state.username, event.target.value))
      }}></input>
      <button>login</button>
    </div>
  )
}

export default CreateUser