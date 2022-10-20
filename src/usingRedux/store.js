import {CombineReducers} from "../redux/store";
import {LoginReducer} from "./redusers/loginReducer";
import {CreateUserReducer} from "./redusers/createUserReducer";
import {ApplyMiddleware, CreateStoreWithMiddleware} from "../redux/middleware";
import {ThunkMiddleware} from "../redux/thunkMiddleware";

let reducers = CombineReducers({
  login: LoginReducer,
  createUser: CreateUserReducer
})

let store = CreateStoreWithMiddleware(reducers, ApplyMiddleware(ThunkMiddleware))

export default store