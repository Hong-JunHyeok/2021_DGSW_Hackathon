import { all, fork } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";

import deviceSaga from "./device";
import dbSaga from "./db";
import videoSaga from "./video";
import userSaga from "./user";
import historySaga from "./history";

axios.defaults.baseURL = "http://192.168.137.116:5001";

const accessToken = Cookies.get("access_token");

axios.defaults.headers.Authorization = accessToken
  ? `Bearer ${accessToken}`
  : "";

export default function* rootSaga() {
  yield all([
    fork(deviceSaga),
    fork(dbSaga),
    fork(videoSaga),
    fork(userSaga),
    fork(historySaga),
  ]);
}
