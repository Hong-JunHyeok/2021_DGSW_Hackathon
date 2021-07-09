import { all, fork } from "redux-saga/effects";
import axios from "axios";

import deviceSaga from "./device";

axios.defaults.baseURL = "http://192.168.0.26:5001";

export default function* rootSaga() {
  yield all([fork(deviceSaga)]);
}
