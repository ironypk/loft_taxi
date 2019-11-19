import { takeEvery, call, put, select } from "redux-saga/effects";
import { login, loginSuccess, loginError } from "../reducers/login_reducer";
import * as Axios from "axios";

let postRequest = user => {
  return Axios.post("https://loft-taxi.glitch.me/auth", user).then(
    response => response.data
  );
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
      localStorage.setItem("token", token);
      yield put(loginSuccess());
    }
   });
}
