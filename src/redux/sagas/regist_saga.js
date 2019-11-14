import { takeEvery, call, put, select } from "redux-saga/effects";
import { regist, registSucces, registError } from "../reducers/regist_reducer";
import { loginSuccess } from "../reducers/login_reducer";
import * as Axios from "axios";

let postRequest = user => {
  return Axios.post("https://loft-taxi.glitch.me/register", user).then(
    response => response.data
  );
};

export function* registSaga() {
  yield takeEvery(regist, function*() {
    let {
      registPage: { user }
    } = yield select();
    const { token, error } = yield call(postRequest, user);
    if (error !== undefined) {
      alert(error);
      yield put(registError());
    } else {
      localStorage.setItem("token", token);
      yield put(registSucces());
      yield put(loginSuccess());
    }
  });
}
