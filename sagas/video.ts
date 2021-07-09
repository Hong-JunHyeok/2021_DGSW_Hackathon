import axios, { AxiosResponse } from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
} from "../modules/video";

function getVideosAPI() {
  return axios.get(`/videos`);
}

function* getVideos() {
  try {
    const result: AxiosResponse = yield call(getVideosAPI);
    yield put({
      type: GET_VIDEOS_SUCCESS,
      payload: result.data.fileNameArr,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_VIDEOS_FAILURE,
      payload: error.response.data,
    });
  }
}

function* watchGetVideos() {
  yield takeLatest(GET_VIDEOS_REQUEST, getVideos);
}

export default function* dbSaga() {
  yield all([fork(watchGetVideos)]);
}
