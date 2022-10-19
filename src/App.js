import Login from "./compontents/login/login"
import CreateUser from "./compontents/creteUser/createUser";


const App = (props) => {
  return (
    <div>
      <Login state={props.state.login} dispatch={props.dispatch}/>
      <CreateUser state={props.state.createUser} dispatch={props.dispatch}/>
    </div>
  )
}

export default App

