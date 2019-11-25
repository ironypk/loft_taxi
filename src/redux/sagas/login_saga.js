import { takeEvery, call, put, select } from "redux-saga/effects";
import { login, loginSuccess, loginError } from "../reducers/login_reducer";
import {setToken} from '../reducers/profile_reducer'
import * as Axios from "axios";

let postRequest = async user => {
  let {data} = await Axios.post("https://loft-taxi.glitch.me/auth", user)
  return data
};
export function* loginSaga() {
  yield takeEvery(login, function*() {
    let {
      loginPage: { user }
    } = yield select();
    const { token, error } = yield call(postRequest, user);
    if (error !== undefined) {
      alert(error);
      yield put(loginError());
    } else {
      yield put(setToken(token))
      localStorage.setItem("isLoggedIn", true);
      yield put(loginSuccess());
    }
   });
}
