import { fork } from "redux-saga/effects";
import { loginSaga } from "./sagas/login_saga";
import { registSaga } from "./sagas/regist_saga";
import { profileSaga } from "./sagas/profile_saga";
import { taxiSaga } from './sagas/taxi_saga'
import { getRouteSaga} from './sagas/getRoute_saga'
export default function* rootSaga() {
  yield fork(loginSaga);
  yield fork(registSaga);
  yield fork(profileSaga);
  yield fork(taxiSaga);
  yield fork(getRouteSaga);
  // code after fork-effect
}
