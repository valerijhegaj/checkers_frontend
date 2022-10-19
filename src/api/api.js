import axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:4444/api/'
});

export const authAPI = {
  register(username, password) {
    return instance.post(`user`, {username: username, password: password});
  },
  login(username, password, max_age = 60 * 30) {
    return instance.post(`session`, {username: username, password: password, max_age: max_age});
  },
  checkAuth() {
    return instance.get(`user`)
  }
}