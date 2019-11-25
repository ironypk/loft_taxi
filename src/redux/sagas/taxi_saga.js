import { takeEvery, call, put } from "redux-saga/effects";
import { fetchAdressList, fetchAdressListError, fetchAdressListSuccess } from "../reducers/taxi_reducer";
import * as Axios from "axios";

let getRequest = async () => {
  let {data} = await Axios.get("https://loft-taxi.glitch.me/addressList")
  return data
};


export function* taxiSaga() {
  yield takeEvery(fetchAdressList, function*() {
    const {addresses, error} = yield call(getRequest);
    if (error !== undefined) {
      alert(error);
      yield put(fetchAdressListError());
    } else {
      yield put(fetchAdressListSuccess(addresses));
    }
   });
}