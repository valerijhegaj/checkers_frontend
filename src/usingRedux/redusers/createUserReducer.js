const ActionTypes = {
  UpdateCreateUser: "update create user"
}

const initialState = {
  password: '',
  username: ''
}

export const CreateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UpdateCreateUser:
      return {...state, username: action.username, password: action.password}
    default:
      return state
  }
}

export const CreateUserActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateCreateUser, username: username, password: password}
}