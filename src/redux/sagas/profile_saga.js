import { takeEvery, call, put, select } from "redux-saga/effects";
import { saveCard, saveCardError, saveCardSuccess } from "../reducers/profile_reducer";
import * as Axios from "axios";

let postRequest = card => {
  return Axios.post("https://loft-taxi.glitch.me/card", card).then(
    response => response.data
  );
};

export function* profileSaga() {
  yield takeEvery(saveCard, function*() {
    let {
        profilePage : {card}
    } = yield select();
    const { error } = yield call(postRequest, card);
    if (error !== undefined) {
      alert(error);
      yield put(saveCardError())
    } else {
        alert("Карта Сохранена");
        yield put(saveCardSuccess());
    }
  });
}
