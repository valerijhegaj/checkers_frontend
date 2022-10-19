import {ActionTypes} from "../../redux/state";

const Login = (props) => {

  return (
    <div>
      <input type="text" value={props.state.username} onChange={event => {
        props.dispatch({type: ActionTypes.UpdateLogin, username: event.target.value, password: props.state.password})
      }}></input>
      <input value={props.state.password} onChange={event => {
        props.dispatch({type: ActionTypes.UpdateLogin, username: props.state.username, password: event.target.value})
      }}></input>
      <button>login</button>
    </div>
  )
}

export default Login