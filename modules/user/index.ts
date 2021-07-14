import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  loginLoading: false,
  loginError: null,
  loginDone: false,
  token: "",

  signUpLoading: false,
  signUpError: null,
  signUpDone: false,

  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,

  usersLoading: false,
  usersError: null,
  usersData: [],

  grantLoading: false,
  grantError: null,

  me: null,
};

export const GET_MY_INFO_REQUEST = "GET_MY_INFO_REQUEST" as const;
export const GET_MY_INFO_SUCCESS = "GET_MY_INFO_SUCCESS" as const;
export const GET_MY_INFO_FAILURE = "GET_MY_INFO_FAILURE" as const;

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE" as const;

export const GET_USERS_REQUEST = "GET_USERS_REQUEST" as const;
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS" as const;
export const GET_USERS_FAILURE = "GET_USERS_FAILURE" as const;

export const GRANT_USER_REQUEST = "GRANT_USER_REQUEST" as const;
export const GRANT_USER_SUCCESS = "GRANT_USER_SUCCESS" as const;
export const GRANT_USER_FAILURE = "GRANT_USER_FAILURE" as const;

export const UNGRANT_USER_REQUEST = "UNGRANT_USER_REQUEST" as const;
export const UNGRANT_USER_SUCCESS = "UNGRANT_USER_SUCCESS" as const;
export const UNGRANT_USER_FAILURE = "UNGRANT_USER_FAILURE" as const;

export const LOG_OUT = "LOG_OUT" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UNGRANT_USER_REQUEST:
        draft.grantError = null;
        draft.grantLoading = true;
        break;
      case UNGRANT_USER_SUCCESS:
        draft.grantLoading = false;
        draft.usersData = action.payload;
        break;
      case UNGRANT_USER_FAILURE:
        draft.grantLoading = false;
        draft.grantError = action.payload;
        break;
      case GRANT_USER_REQUEST:
        draft.grantError = null;
        draft.grantLoading = true;
        break;
      case GRANT_USER_SUCCESS:
        draft.grantLoading = false;
        draft.usersData = action.payload;
        break;
      case GRANT_USER_FAILURE:
        draft.grantLoading = false;
        draft.grantError = action.payload;
        break;
      case GET_USERS_REQUEST:
        draft.usersError = null;
        draft.usersLoading = true;
        draft.usersData = [];
        break;
      case GET_USERS_SUCCESS:
        draft.usersLoading = false;
        draft.usersData = action.payload;
        break;
      case GET_USERS_FAILURE:
        draft.usersLoading = false;
        draft.usersError = action.payload;
        break;
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
        draft.token = action.payload.access_token;
        draft.loginDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.loginError = action.payload;
        draft.loginLoading = false;
        draft.loginDone = false;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpError = action.payload;
        draft.signUpLoading = false;
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
