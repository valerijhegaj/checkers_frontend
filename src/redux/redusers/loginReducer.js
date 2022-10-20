const ActionTypes = {
  UpdateLogin: "update login"
}

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UpdateLogin:
      state.username = action.username
      state.password = action.password
      break
    default:
      break
  }
  return state
}
export const LoginActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateLogin, username: username, password: password}
}