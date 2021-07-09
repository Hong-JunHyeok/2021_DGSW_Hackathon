import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import user from "./user";
import device from "./device";

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      const combinedReducer = combineReducers({
        user,
        device,
      });
      return combinedReducer(state, action);
  }
};

export default rootReducer;
