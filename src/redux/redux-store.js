import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import loginReducer from "./reducers/login_reducer";
import registReducer from "./reducers/regist_reducer";
import profileReducer from "./reducers/profile_reducer";
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas'
import {reducer as formReducer} from 'redux-form'
import taxiReducer from "./reducers/taxi_reducer";


const sagaMiddleWare = createSagaMiddleWare()

let reducers = combineReducers({
  loginPage: loginReducer,
  registPage: registReducer,
  profilePage: profileReducer,
  taxi : taxiReducer,
  form : formReducer
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
