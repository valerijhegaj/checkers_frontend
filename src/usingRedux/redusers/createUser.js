const ActionTypes = {
  UpdateCreateUser: "update create user"
}

const initialState = {
  password: '',
  username: ''
}

export const createUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UpdateCreateUser:
      return {username: action.username, password: action.password}
    default:
      return state
  }
}

export const update = (username: string, password: string) => {
  return {type: ActionTypes.UpdateCreateUser, username: username, password: password}
}