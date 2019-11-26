import { takeEvery, call, put, select } from "redux-saga/effects";
import { regist, registSucces, registError } from "../reducers/regist_reducer";
import { loginSuccess } from "../reducers/login_reducer";
import * as Axios from "axios";

let postRequest = async user => {
  try {
    let { data } = await Axios.post(
      "https://loft-taxi.glitch.me/register",
      user
    );
    return data;
  } catch (error) {
    alert(error);
  }
};

export function* registSaga() {
  yield takeEvery(regist, function*() {
    let {
      registPage: { user }
    } = yield select();
    try {
      const { token, error } = yield call(postRequest, user);
      if (error !== undefined) {
        alert(error);
        yield put(registError());
      } else {
        localStorage.setItem("token", token);
        yield put(registSucces());
        yield put(loginSuccess());
      }
    } catch (error) {
      yield put(registError());
    }
  });
}
