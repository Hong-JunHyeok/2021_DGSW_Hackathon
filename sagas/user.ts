import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { set } from "js-cookie";
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_MY_INFO_FAILURE,
  GET_MY_INFO_REQUEST,
  GET_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  GRANT_USER_REQUEST,
  GRANT_USER_SUCCESS,
  GRANT_USER_FAILURE,
  UNGRANT_USER_SUCCESS,
  UNGRANT_USER_FAILURE,
  UNGRANT_USER_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../modules/user";
import { AnyAction } from "redux";
import { toast } from "react-toastify";

function signUpAPI(data: { name: string; password: string }) {
  return axios.post("/signup", data);
}

function* signUp(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(signUpAPI, action.payload);

    toast.success("회원가입 성공했습니다.");
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    toast.error("에러 발생");
    yield put({
      type: SIGN_UP_FAILURE,
      payload: error.response.data,
    });
  }
}

function loginAPI(data: { name: string; password: string }) {
  return axios.post("/login", data);
}

function* login(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(loginAPI, action.payload);
    set("access_token", result.data.result.access_token, {
      path: "/",
    });

    toast.success("로그인에 성공했습니다.");
    yield put({
      type: LOG_IN_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);

    toast.error("에러발생");
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
    yield put({
      type: GET_MY_INFO_SUCCESS,
      payload: result.data.user,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_MY_INFO_FAILURE,
      payload: "error",
    });
  }
}

function getUsersAPI() {
  return axios.get("/admin");
}

function* getUsers() {
  try {
    const result: AxiosResponse = yield call(getUsersAPI);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_USERS_FAILURE,
      payload: error.response.data,
    });
  }
}

function grantUserAPI(user_id: number) {
  return axios.post("/admin", {
    user_id,
  });
}

function* grantUser(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(grantUserAPI, action.payload);
    yield put({
      type: GRANT_USER_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GRANT_USER_FAILURE,
      payload: error.response.data,
    });
  }
}

function unGrantUserAPI(user_id: number) {
  return axios.delete(`/admin/${user_id}`);
}

function* unGrantUser(action: AnyAction) {
  try {
    const result: AxiosResponse = yield call(unGrantUserAPI, action.payload);
    yield put({
      type: UNGRANT_USER_SUCCESS,
      payload: result.data.result,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UNGRANT_USER_FAILURE,
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

function* watchGetUsers() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
}

function* watchGrantUser() {
  yield takeLatest(GRANT_USER_REQUEST, grantUser);
}

function* watchUngrantUser() {
  yield takeLatest(UNGRANT_USER_REQUEST, unGrantUser);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchGetMyInfo),
    fork(watchGetUsers),
    fork(watchGrantUser),
    fork(watchUngrantUser),
  ]);
}
