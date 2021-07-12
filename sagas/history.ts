import axios, { AxiosResponse } from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  GET_HISTORY_FAILURE,
  GET_HISTORY_REQUEST,
  GET_HISTORY_SUCCESS,
} from "../modules/history";

function getHistoryAPI() {
  return axios.get("/history");
}

function* getHistory() {
  try {
    const result: AxiosResponse = yield call(getHistoryAPI);

    yield put({
      type: GET_HISTORY_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_HISTORY_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchGetHistory() {
  yield takeLatest(GET_HISTORY_REQUEST, getHistory);
}

export default function* historySaga() {
  yield all([fork(watchGetHistory)]);
}
