import Login from "./compontents/login/login"
import CreateUser from "./compontents/creteUser/createUser";


const App = (props) => {
  return (
    <div>
      <Login state={props.state.login} update={props.updateLogin}/>
      <CreateUser state={props.state.createUser} update={props.updateCreateUser}/>
    </div>
  )
}

export default App

