import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  isLoggedIn: false,
};

export const LOG_IN = "LOG_IN" as const;
export const LOG_OUT = "LOG_OUT" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN:
        draft.isLoggedIn = true;
        break;
      case LOG_OUT:
        draft.isLoggedIn = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
