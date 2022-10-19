const ActionTypes = {
  UpdateLogin: 0,
  UpdateCreateUser: 1
}

export class Store {
  constructor() {
    this._state = {
      login: {
        username: "",
        password: ""
      },
      createUser: {
        username: "",
        password: ""
      }
    }
  }
  _state
  _observer

  GetState() {
    return this._state
  }

  Subscribe(observer) {
    this._observer = observer
  }
  Dispatch(action) {
    switch (action.type) {
      case ActionTypes.UpdateLogin:
        this._state.login.username = action.username
        this._state.login.password = action.password
        break
      case ActionTypes.UpdateCreateUser:
        this._state.createUser.username = action.username
        this._state.createUser.password = action.password
        break
      default:
        return
    }
    this._observer(this)
  }
}

export const LoginActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateLogin, username: username, password: password}
}

export const CreateUserActionCreator = (username: string, password: string) => {
  return {type: ActionTypes.UpdateCreateUser, username: username, password: password}
}
