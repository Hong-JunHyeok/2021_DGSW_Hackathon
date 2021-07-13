import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import allCookies from "next-cookies";
import DeviceController from "../components/DeviceController";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
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

const Manage = () => {
  const dispatch = useDispatch();
  const { servoState, ledState } = useSelector((state: any) => state.device);

  const handleToggleLed = useCallback((ledStatus: boolean, index: number) => {
    dispatch({
      type: LED_TOGGLE_REQUEST,
      payload: { ledStatus: ledStatus ? "false" : "true", ledNum: index + 1 },
      //ledStatus , ledNum
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
          {ledState.map((led: boolean, index: number) => {
            return (
              <DeviceController
                title={`${index + 1}`}
                onImage={<BsToggleOn fill="#3181f6" />}
                offImage={<BsToggleOff />}
                isOn={led}
                handler={() => handleToggleLed(led, index)}
              />
            );
          })}
          <DeviceController
            title="🦾Servo Motor(서보 모터)"
            onImage={<BsToggleOn fill="#3181f6" />}
            offImage={<BsToggleOff />}
            isOn={servoState}
            handler={() => handleToggleServo(servoState)}
          />
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const allCookies = cookies(context);

    axios.defaults.headers.Authorization = "";
    if (context.req && allCookies.access_token) {
      axios.defaults.headers.Authorization = `Bearer ${allCookies.access_token}`;
    }

    context.store.dispatch({
      type: GET_INIT_REQUEST,
    });
    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Manage;
