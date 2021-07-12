import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  loginLoading: false,
  loginError: null,
  loginDone: false,

  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,

  me: null,
};

export const GET_MY_INFO_REQUEST = "GET_MY_INFO_REQUEST" as const;
export const GET_MY_INFO_SUCCESS = "GET_MY_INFO_SUCCESS" as const;
export const GET_MY_INFO_FAILURE = "GET_MY_INFO_FAILURE" as const;

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const LOG_OUT = "LOG_OUT" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;
      case GET_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.payload;
        draft.loadMyInfoDone = true;
        break;
      case GET_MY_INFO_FAILURE:
        draft.loadMyInfoError = action.payload;
        draft.loadMyInfoLoading = false;
        draft.me = null;
        break;
      case LOG_IN_REQUEST:
        draft.me = null;
        draft.loginLoading = true;
        draft.loginError = null;
        draft.loginDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.me = action.payload.user;
        draft.loginDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.loginError = action.payload;
        draft.loginLoading = false;
        break;
      case LOG_OUT:
        draft.me = null;
        break;
      default:
        break;
    }
  });
};

export default reducer;
