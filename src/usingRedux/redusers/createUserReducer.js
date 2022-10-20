const ActionTypes = {
  UpdateCreateUser: "update create user"
}

const initialState = {
  password:'',
  login:''
}

export const CreateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UpdateCreateUser:
      state.username = action.username
      state.password = action.password
      return state
    default:
      return state
  }
}

export const CreateUserActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateCreateUser, username: username, password: password}
}