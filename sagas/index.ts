import { all, fork } from "redux-saga/effects";
import axios from "axios";
import Cookies from "js-cookie";

import deviceSaga from "./device";
import dbSaga from "./db";
import videoSaga from "./video";
import userSaga from "./user";
import historySaga from "./history";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://192.168.137.116:5001";

if (!axios.defaults.headers.Authorization) {
  const accessToken = Cookies.get("access_token");

  axios.defaults.headers.Authorization = accessToken
    ? `Bearer ${accessToken}`
    : "";
}

// axios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     console.error(err);
//     if (err.response.status === 401) {
//       console.log("토큰 만료");
//       if (!isServer) {
//         toast.warn("세션이 만료되었습니다. 다시 로그인해주세요.");
//       }
//     } else {
//       return err;
//     }
//   }
// );

export default function* rootSaga() {
  yield all([
    fork(deviceSaga),
    fork(dbSaga),
    fork(videoSaga),
    fork(userSaga),
    fork(historySaga),
  ]);
}
