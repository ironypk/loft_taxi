import { takeEvery, call, put, select } from "redux-saga/effects";
import { getRoute } from "../reducers/taxi_reducer";
import * as Axios from "axios";

let getRequest = () => {
  return Axios.get("https://loft-taxi.glitch.me/route").then(
    response => response.data
  );
};



export function* getRouteSaga() {
  yield takeEvery(getRoute, function*() {
    let {
        taxi: { route :{to,from} }
      } = yield select();
    const {error} = yield call(getRequest);
   });
}