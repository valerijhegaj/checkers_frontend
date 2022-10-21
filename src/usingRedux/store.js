import {CombineReducers} from "../redux/store";
import {login} from "./redusers/login";
import {createUser} from "./redusers/createUser";
import {ApplyMiddleware, CreateStoreWithMiddleware} from "../redux/middleware";
import {ThunkMiddleware} from "../redux/thunkMiddleware";
import {switcher} from "./redusers/switcher";

let reducers = CombineReducers({login, createUser, switcher})

let store = CreateStoreWithMiddleware(reducers, ApplyMiddleware(ThunkMiddleware))

export default store
window.store = store