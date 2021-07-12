import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  videoData: null,
  videoLoading: false,
  videoError: null,
};

export const GET_VIDEOS_REQUEST = "GET_VIDEOS_REQUEST" as const;
export const GET_VIDEOS_SUCCESS = "GET_VIDEOS_SUCCESS" as const;
export const GET_VIDEOS_FAILURE = "GET_VIDEOS_FAILURE" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_VIDEOS_REQUEST:
        draft.videoLoading = true;
        draft.videoError = null;
        draft.videoData = null;
        break;
      case GET_VIDEOS_SUCCESS:
        draft.videoLoading = false;
        draft.videoData = action.payload;
        break;
      case GET_VIDEOS_FAILURE:
        draft.videoError = action.payload;
        draft.videoLoading = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
