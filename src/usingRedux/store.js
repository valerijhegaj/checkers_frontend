import {CombineReducers, CreateStore} from "../redux/store";
import {LoginReducer} from "./redusers/loginReducer";
import {CreateUserReducer} from "./redusers/createUserReducer";

let reducers = CombineReducers({
  login: LoginReducer,
  createUser: CreateUserReducer
})

let store = CreateStore(reducers)

export default store