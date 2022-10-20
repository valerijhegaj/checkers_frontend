const ActionTypes = {
  UpdateCreateUser: "update create user"
}

export const CreateUserReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UpdateCreateUser:
      state.username = action.username
      state.password = action.password
      break
    default:
      break
  }
  return state
}

export const CreateUserActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateCreateUser, username: username, password: password}
}