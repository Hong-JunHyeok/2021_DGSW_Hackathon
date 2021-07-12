import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import user, { initialState as userInit } from "./user";
import device, { initialState as deviceInit } from "./device";
import db, { initialState as dbInit } from "./db";
import video, { initialState as videoInit } from "./video";
import history, { initialState as historyInit } from "./history";

export interface RootState {
  user: typeof userInit;
  device: typeof deviceInit;
  db: typeof dbInit;
  video: typeof videoInit;
  history: typeof historyInit;
}

const rootReducer = (
  state: any,
  action: AnyAction
): CombinedState<RootState> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      const combinedReducer = combineReducers({
        user,
        device,
        db,
        video,
        history,
      });
      return combinedReducer(state, action);
  }
};

export default rootReducer;
