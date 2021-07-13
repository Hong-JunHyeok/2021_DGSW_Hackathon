import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  GET_INIT_FAILURE,
  GET_INIT_REQUEST,
  GET_INIT_SUCCESS,
  LED_TOGGLE_FAILURE,
  LED_TOGGLE_REQUEST,
  LED_TOGGLE_SUCCESS,
  SERVO_TOGGLE_FAILURE,
  SERVO_TOGGLE_REQUEST,
  SERVO_TOGGLE_SUCCESS,
} from "../modules/device";

function toggleLedAPI(data: any) {
  //ledStatus , ledNum
  return axios.get(`/led/${data.ledNum}/${data.ledStatus}`);
}

function* toggleLed(action: any) {
  try {
    const result: AxiosResponse = yield call(toggleLedAPI, action.payload);
    yield put({
      type: LED_TOGGLE_SUCCESS,
      payload: result.data.led,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LED_TOGGLE_FAILURE,
      payload: error.response.data,
    });
  }
}

function toggleServoAPI(data: string) {
  return axios.get(`/servo/${data}`);
}

function* toggleServo(action: any) {
  try {
    const result: AxiosResponse = yield call(toggleServoAPI, action.payload);
    yield put({
      type: SERVO_TOGGLE_SUCCESS,
      payload: result.data.servo,
    });
  } catch (error) {
    toast.error(error.response.data);
    yield put({
      type: SERVO_TOGGLE_FAILURE,
      payload: error.response.data,
    });
  }
}

function getInitAPI() {
  return axios.get(`/status`);
}

function* getInit() {
  try {
    const result: AxiosResponse = yield call(getInitAPI);
    yield put({
      type: GET_INIT_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_INIT_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchToggleLed() {
  yield takeLatest(LED_TOGGLE_REQUEST, toggleLed);
}

function* watchToggleServo() {
  yield takeLatest(SERVO_TOGGLE_REQUEST, toggleServo);
}

function* watchGetInit() {
  yield takeLatest(GET_INIT_REQUEST, getInit);
}

export default function* deviceSaga() {
  yield all([fork(watchToggleLed), fork(watchToggleServo), fork(watchGetInit)]);
}
