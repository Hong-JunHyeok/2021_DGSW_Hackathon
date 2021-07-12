import produce from "immer";
import { AnyAction } from "redux";

export const GET_HISTORY_REQUEST = "GET_HISTORY_REQUEST" as const;
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS" as const;
export const GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE" as const;

export const initialState = {
  historyData: {
    led: [],
    servo: [],
  },
  historyError: null,
};

export default function reducer(state = initialState, action: AnyAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_HISTORY_REQUEST:
        draft.historyData = {
          led: [],
          servo: [],
        };
        draft.historyError = null;
        break;
      case GET_HISTORY_SUCCESS:
        draft.historyData = action.payload;
        break;
      case GET_HISTORY_FAILURE:
        draft.historyError = action.payload;
        break;
      default:
        break;
    }
  });
}
