import Login from "./compontents/login/login"
import CreateUser from "./compontents/creteUser/createUser";


const App = (props) => {
  return (
    <div>
      <Login state={props.store._state.login} update={props.store.UpdateLogin.bind(props.store)}/>
      <CreateUser state={props.store._state.createUser} update={props.store.UpdateCreateUser.bind(props.store)}/>
    </div>
  )
}

export default App

