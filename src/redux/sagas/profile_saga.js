import { takeEvery, call, put, select } from "redux-saga/effects";
import { saveCard, saveCardError, saveCardSuccess } from "../reducers/profile_reducer";
import * as Axios from "axios";

let postRequest = async card => {
  let {data} = await Axios.post("https://loft-taxi.glitch.me/card", card)
  return data
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
        localStorage.setItem('card', JSON.stringify(card))
        yield put(saveCardSuccess());
    }
  });
}
