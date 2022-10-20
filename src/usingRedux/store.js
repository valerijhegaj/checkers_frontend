import {CombineReducers} from "../redux/store";
import {login} from "./redusers/login";
import {createUser} from "./redusers/createUser";
import {ApplyMiddleware, CreateStoreWithMiddleware} from "../redux/middleware";
import {ThunkMiddleware} from "../redux/thunkMiddleware";

let reducers = CombineReducers({login, createUser})

let store = CreateStoreWithMiddleware(reducers, ApplyMiddleware(ThunkMiddleware))

export default store