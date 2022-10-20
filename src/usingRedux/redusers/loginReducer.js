const ActionTypes = {
  UpdateLogin: "update login"
}

const initialState = {
  password:'',
  login:''
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UpdateLogin:
      state.username = action.username
      state.password = action.password
      return state
    default:
      return state
  }
}
export const LoginActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateLogin, username: username, password: password}
}