import axios, { AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  DB_SEARCH_FAILURE,
  DB_SEARCH_REQUEST,
  DB_SEARCH_SUCCESS,
} from "../modules/db";
import { toast } from "react-toastify";

function dbSearchAPI(sql: string) {
  return axios.post(`/db/execute`, {
    sql,
  });
}

function* dbSearch(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(dbSearchAPI, action.payload);
    yield put({
      type: DB_SEARCH_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    toast.error(error.response.data);
    console.error(error);
    yield put({
      type: DB_SEARCH_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchDbSearch() {
  yield takeLatest(DB_SEARCH_REQUEST, dbSearch);
}

export default function* dbSaga() {
  yield all([fork(watchDbSearch)]);
}
