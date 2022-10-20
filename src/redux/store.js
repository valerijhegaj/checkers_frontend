export class Store {
  GetState() {
    return this._state
  }

  Subscribe(observer) {
    this._observer = observer
  }

  Dispatch(action) {
    this._state = this._reducer(this._state, action)
    this._observer()
  }

  _state
  _observer
  _reducer

  constructor() {
    this._state = {}
    this._observer = () => {}
    this._reducer = {}
  }

  _addReducer(reducer) {
    this._reducer = reducer
    this._state = reducer(this._state, {type: undefined})
  }
}

export function CombineReducers(reducers) {
  return function CombinationReducers(state, action) {
    let isChanged = false
    let nextState = {}
    for (let key in reducers) {
      nextState[key] = reducers[key](state[key], action)
      isChanged = isChanged || (nextState[key] !== state[key])
    }
    if (isChanged) {
      return nextState
    }
    return state
  }
}

export function CreateStore(reducer) {
  let store = new Store()
  store._addReducer(reducer)
  return store
}

