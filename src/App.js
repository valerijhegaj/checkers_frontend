import CreateUserContainer from "./compontents/creteUser/createUserContainer";
import LoginContainer from "./compontents/login/loginContainer";


const App = (props) => {
  return (
    <div>
      <LoginContainer state={props.state.login} dispatch={props.dispatch}/>
      <CreateUserContainer state={props.state.createUser} dispatch={props.dispatch}/>
    </div>
  )
}

export default App

