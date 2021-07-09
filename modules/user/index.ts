import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  loginLoading: false,
  loginError: null,
  me: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST" as const;
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS" as const;
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.me = action.payload;
        break;
      case LOG_IN_FAILURE:
        draft.loginError = action.payload;
        draft.loginLoading = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
