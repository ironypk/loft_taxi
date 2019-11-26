import { takeEvery, call, put, select } from "redux-saga/effects";
import {
  saveCard,
  saveCardError,
  saveCardSuccess
} from "../reducers/profile_reducer";
import * as Axios from "axios";

let postRequest = async card => {
  try {
    let { data } = await Axios.post("https://loft-taxi.glitch.me/card", card);
    return data;
  } catch (error) {
    alert(error);
  }
};

export function* profileSaga() {
  yield takeEvery(saveCard, function*() {
    let {
      profilePage: { card }
    } = yield select();
    try {
      const { error } = yield call(postRequest, card);
      if (error !== undefined) {
        alert(error);
        yield put(saveCardError());
      } else {
        localStorage.setItem("card", JSON.stringify(card));
        yield put(saveCardSuccess());
      }
    } catch (error) {
      yield put(saveCardError());
    }
  });
}
