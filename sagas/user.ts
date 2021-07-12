import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { set } from "js-cookie";
import {
  GET_MY_INFO_FAILURE,
  GET_MY_INFO_REQUEST,
  GET_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from "../modules/user";
import { AnyAction } from "redux";

function loginAPI(data: { name: string; password: string }) {
  return axios.post("/login", data);
}

function* login(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(loginAPI, action.payload);
    set("access_token", result.data.result.access_token, {
      path: "/",
    });

    yield put({
      type: LOG_IN_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      payload: error.response.data,
    });
  }
}

function getMyInfoAPI() {
  return axios.get("/jwt_test");
}

function* getMyInfo() {
  try {
    const result: AxiosResponse = yield call(getMyInfoAPI);
    console.log(result.data);
    yield put({
      type: GET_MY_INFO_SUCCESS,
      payload: result.data.user,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_MY_INFO_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchGetMyInfo() {
  yield takeLatest(GET_MY_INFO_REQUEST, getMyInfo);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchGetMyInfo)]);
}
