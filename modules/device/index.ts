import produce from "immer";
import { AnyAction } from "redux";

export const initialState = {
  //LED, Servo 상태값 가져오기
  initLoading: false,
  initError: null,

  //LED 토글
  ledState: [],
  ledToggleLoading: false,
  ledToggleError: null,

  //Servo Motor 토글
  servoState: false,
  servoToggleLoading: false,
  servoToggleError: null,
};

export const GET_INIT_REQUEST = "GET_INIT_REQUEST" as const;
export const GET_INIT_SUCCESS = "GET_INIT_SUCCESS" as const;
export const GET_INIT_FAILURE = "GET_INIT_FAILURE" as const;

export const LED_TOGGLE_REQUEST = "LED_TOGGLE_REQUEST" as const;
export const LED_TOGGLE_SUCCESS = "LED_TOGGLE_SUCCESS" as const;
export const LED_TOGGLE_FAILURE = "LED_TOGGLE_FAILURE" as const;

export const SERVO_TOGGLE_REQUEST = "SERVO_TOGGLE_REQUEST" as const;
export const SERVO_TOGGLE_SUCCESS = "SERVO_TOGGLE_SUCCESS" as const;
export const SERVO_TOGGLE_FAILURE = "SERVO_TOGGLE_FAILURE" as const;

const reducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_INIT_REQUEST:
        draft.initLoading = true;
        draft.ledState = [];
        draft.servoState = false;
        draft.initError = null;
        break;
      case GET_INIT_SUCCESS:
        draft.ledState = action.payload.led;
        draft.servoState = action.payload.servo;
        draft.initLoading = false;
        break;
      case GET_INIT_FAILURE:
        draft.initError = action.payload;
        break;

      case LED_TOGGLE_REQUEST:
        draft.ledToggleLoading = true;
        draft.ledToggleError = null;
        break;
      case LED_TOGGLE_SUCCESS:
        draft.ledState = action.payload;
        draft.ledToggleLoading = false;
        break;
      case LED_TOGGLE_FAILURE:
        draft.ledToggleError = action.payload;
        break;

      case SERVO_TOGGLE_REQUEST:
        draft.servoToggleLoading = true;
        draft.servoState = false;
        draft.servoToggleError = null;
        break;
      case SERVO_TOGGLE_SUCCESS:
        draft.servoState = action.payload;
        draft.servoToggleLoading = false;
        break;
      case SERVO_TOGGLE_FAILURE:
        draft.servoToggleError = action.payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
