import renderTree from "../index";

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
  renderTree()
}

export const updateCreateUser = (username, password) => {
  state.createUser.username = username
  state.createUser.password = password
  renderTree()
}

export default state