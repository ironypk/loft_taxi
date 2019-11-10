import { createStore, combineReducers } from "redux";
import loginReducer from './login_reducer';
import registReducer from './regist_reducer'
import profileReducer from "./profile_reducer";

let reducers = combineReducers({
    loginPage : loginReducer,
    registPage : registReducer,
    profilePage : profileReducer
});

let store = createStore(reducers);


window.store = store;


export default store;