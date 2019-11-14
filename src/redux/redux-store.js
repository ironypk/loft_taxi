import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loginReducer from "./reducers/login_reducer";
import registReducer from "./reducers/regist_reducer";
import profileReducer from "./reducers/profile_reducer";
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'


const sagaMiddleWare = createSagaMiddleWare()

let reducers = combineReducers({
  loginPage: loginReducer,
  registPage: registReducer,
  profilePage: profileReducer
});

let store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleWare)
  )
);

sagaMiddleWare.run(rootSaga)

window.store = store;

export default store;
