import React, { useCallback, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import DeviceController from "../components/DeviceController";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_INIT_REQUEST,
  LED_TOGGLE_REQUEST,
  SERVO_TOGGLE_REQUEST,
} from "../modules/device";
import wrapper from "../store";
import { END } from "redux-saga";
import { GET_MY_INFO_REQUEST } from "../modules/user";
import cookies from "next-cookies";
import axios from "axios";
import { PageLayout } from "../styles/PageLayout";
import { LED_LIST } from "../array/ledList";

const Manage = () => {
  const dispatch = useDispatch();
  const { servoState, ledState } = useSelector((state: any) => state.device);

  const handleToggleLed = useCallback((ledStatus: boolean, index: number) => {
    dispatch({
      type: LED_TOGGLE_REQUEST,
      payload: { ledStatus: ledStatus ? "false" : "true", ledNum: index + 1 },
    });
  }, []);

  const handleToggleServo = useCallback((servoState: boolean) => {
    dispatch({
      type: SERVO_TOGGLE_REQUEST,
      payload: servoState ? "false" : "true",
    });
  }, []);

  return (
    <AppLayout>
      <PageLayout>
        <h1>기기들의 상태 확인과 기기 조작을 해보세요.</h1>
        <span>간단한 ON/OFF동작으로 내 기기를 조작할 수 있습니다.</span>
        <div className="flex_wrap">
          <div className="servo_container">
            <DeviceController
              title="현관문"
              onImage={<FaDoorOpen fill="#3181f6" />}
              offImage={<FaDoorClosed />}
              isOn={servoState}
              handler={() => handleToggleServo(servoState)}
            />
          </div>
          <hr />
          <div className="led_container">
            {ledState.map((led: boolean, index: number) => {
              return (
                <DeviceController
                  title={`${LED_LIST[index]}`}
                  onImage={<BsToggleOn fill="#3181f6" />}
                  offImage={<BsToggleOff />}
                  isOn={led}
                  handler={() => handleToggleLed(led, index)}
                />
              );
            })}
          </div>
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    axios.defaults.headers.Authorization = "";
    const cookie = context.req ? cookies(context).access_token : "";

    if (context.req && cookie) {
      axios.defaults.headers.Authorization = `Bearer ${cookie}`;
    }

    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: GET_INIT_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Manage;
