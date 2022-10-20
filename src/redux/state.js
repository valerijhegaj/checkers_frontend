import {CreateUserReducer} from "./redusers/createUserReducer";
import {LoginReducer} from "./redusers/loginReducer";

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
    this._reducers = {
      createUser: CreateUserReducer,
      login: LoginReducer
    }

  }

  _state
  _observer
  _reducers

  GetState() {
    return this._state
  }

  Subscribe(observer) {
    this._observer = observer
  }

  Dispatch(action) {
    for (let key in this._state) {
      this._state[key] = this._reducers[key](this._state[key], action)
    }
    this._observer(this)
  }
}

