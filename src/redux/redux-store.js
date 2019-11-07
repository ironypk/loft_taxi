import { createStore, combineReducers } from "redux";
import loginReducer from './login_reducer';
import registReducer from './regist_reducer'

let reducers = combineReducers({
    loginPage : loginReducer,
    registPage : registReducer
});

let store = createStore(reducers);


export default store;