const CreateUser = (props) => {
  return (
    <div>
      <input type="text" value={props.state.username} onChange={event => {
        props.update(event.target.value, props.state.password)
      }}></input>
      <input value={props.state.password} onChange={event => {
        props.update(props.state.username, event.target.value)
      }}></input>
      <button>register</button>
    </div>
  )
}

export default CreateUser