const ActionTypes = {
  UpdateLogin: "update login"
}

const initialState = {
  password:'',
  username:''
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UpdateLogin:
      return {username: action.username, password: action.password }
    default:
      return state
  }
}
export const LoginActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateLogin, username: username, password: password}
}