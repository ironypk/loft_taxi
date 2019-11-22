import { takeEvery, call, put, select } from "redux-saga/effects";
import { getRoute, getRouteSuccess } from "../reducers/taxi_reducer";
import * as Axios from "axios";

let getRequest = (route) => {
  return Axios.get(`https://loft-taxi.glitch.me/route?address1=${route.from}&address2=${route.to}`).then(
    response => response.data
  );
};



export function* getRouteSaga() {
  yield takeEvery(getRoute, function*() {
    let {
        taxi: { route }
      } = yield select();
    const data = yield call(getRequest, route);
    if (!data.length) {
      alert('путь не найдет');
    } else {
      yield put(getRouteSuccess(data))
      console.log(data)
    }
   });
}