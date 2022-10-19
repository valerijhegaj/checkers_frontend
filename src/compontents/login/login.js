const Login = (props) => {
  return (
    <div>
      <input value={props.state.username}></input>
      <input value={props.state.password}></input>
      <button>login</button>
    </div>
  )
}

export default Login