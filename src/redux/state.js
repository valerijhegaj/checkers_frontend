export class Store {
  constructor() {
    this._state = {}
    this._observer = () => {}
    this._reducers = {}
  }
  _state
  _observer
  _reducers

  _addReducers(reducers) {
    this._reducers = reducers
    for (let key in reducers) {
      let newState = reducers[key](undefined, {type: "--nothing"})
      if (newState === undefined) {
        throw new Error("incorrect reducer " + key + " no initial state or return nothing")
      }
      this._state[key] = newState
    }
  }

  GetState() {
    return this._state
  }

  Subscribe(observer) {
    this._observer = observer
  }

  Dispatch(action) {
    for (let key in this._reducers) {
      this._state[key] = this._reducers[key](this._state[key], action)
    }
    this._observer(this)
  }
}

export function CombineReducers(reducers) {
  return reducers
}

export function CreateStore(reducers) {
  let store = new Store()
  store._addReducers(reducers)
  return store
}

