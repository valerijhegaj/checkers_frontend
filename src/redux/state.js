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

  _observer

  UpdateLogin(username: string, password: string) {
    this._state.login.username = username
    this._state.login.password = password
    this._observer(this)
  }

  UpdateCreateUser(username: string, password: string) {
    this._state.createUser.username = username
    this._state.createUser.password = password
    this._observer(this)
  }

  Subscribe(observer) {
    this._observer = observer
  }
}
