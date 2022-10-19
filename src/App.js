import Login from "./compontents/login/login"
import CreateUser from "./compontents/creteUser/createUser";


const App = (props) => {
  return (
    <div>
      <Login state={props.state.login}/>
      <CreateUser state={props.state.createUser}/>
    </div>
  )
}

export default App

