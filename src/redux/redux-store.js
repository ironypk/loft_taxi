import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loginReducer from "./login_reducer";
import registReducer from "./regist_reducer";
import profileReducer from "./profile_reducer";
import profileMiddleware from "./profile_midlware";
import registMiddleware from "./regist_midlware";
import loginMiddleware from "./login_midlware";

let reducers = combineReducers({
  loginPage: loginReducer,
  registPage: registReducer,
  profilePage: profileReducer
});

let store = createStore(
  reducers,
  compose(
    applyMiddleware(loginMiddleware),
    applyMiddleware(profileMiddleware),
    applyMiddleware(registMiddleware)
  )
);

window.store = store;

export default store;
