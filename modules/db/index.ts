import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  dbSearchResult: [],
  dbSearchLoading: false,
  dbSearchError: null,
};

export const DB_SEARCH_REQUEST = "DB_SEARCH_REQUEST" as const;
export const DB_SEARCH_SUCCESS = "DB_SEARCH_SUCCESS" as const;
export const DB_SEARCH_FAILURE = "DB_SEARCH_FAILURE" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DB_SEARCH_REQUEST:
        draft.dbSearchLoading = true;
        draft.dbSearchResult = [];
        draft.dbSearchError = null;
        break;
      case DB_SEARCH_SUCCESS:
        draft.dbSearchResult = action.payload;
        draft.dbSearchLoading = false;
        break;
      case DB_SEARCH_FAILURE:
        draft.dbSearchError = action.payload;
        draft.dbSearchLoading = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
