let renderTree

let state = {
  login: {
    username:"",
    password:""
  },
  createUser: {
    username:"",
    password:""
  }
}

export const updateLogin = (username, password) => {
  state.login.username = username
  state.login.password = password
  renderTree(state)
}

export const updateCreateUser = (username, password) => {
  state.createUser.username = username
  state.createUser.password = password
  renderTree(state)
}

export const subscribe = (observer) => {
  renderTree = observer
}

export default state