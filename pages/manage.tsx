import React, { useCallback, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import DeviceController from "../components/DeviceController";
import { GoLightBulb } from "react-icons/go";
import { HiLightBulb } from "react-icons/hi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_INIT_REQUEST,
  LED_TOGGLE_REQUEST,
  SERVO_TOGGLE_REQUEST,
} from "../modules/device";
import wrapper from "../store";
import { END } from "@redux-saga/core";
import { GET_MY_INFO_REQUEST } from "../modules/user";
import cookies from "next-cookies";
import axios from "axios";
import { PageLayout } from "../styles/PageLayout";

const Manage = () => {
  const dispatch = useDispatch();
  const { ledState, ledToggleLoading, servoToggleLoading, servoState } =
    useSelector((state: any) => state.device);
  const handleOnLed = useCallback(() => {
    dispatch({
      type: LED_TOGGLE_REQUEST,
      payload: "true",
    });
  }, []);

  const handleOffLed = useCallback(() => {
    dispatch({
      type: LED_TOGGLE_REQUEST,
      payload: "false",
    });
  }, []);

  const handleOnServo = useCallback(() => {
    dispatch({
      type: SERVO_TOGGLE_REQUEST,
      payload: "true",
    });
  }, []);

  const handleOffServo = useCallback(() => {
    dispatch({
      type: SERVO_TOGGLE_REQUEST,
      payload: "false",
    });
  }, []);

  return (
    <AppLayout>
      <PageLayout>
        <h1>기기들의 상태 확인과 기기 조작을 해보세요.</h1>
        <span>간단한 ON/OFF동작으로 내 기기를 조작할 수 있습니다.</span>
        <div className="row">
          <DeviceController
            title="🚨LED"
            onImage={<HiLightBulb />}
            offImage={<GoLightBulb />}
            handleOnBtn={handleOnLed}
            handleOffBtn={handleOffLed}
            isOn={ledState}
            isLoading={ledToggleLoading}
          />
          <DeviceController
            title="🦾Servo Motor(서보 모터)"
            onImage={<BsToggleOn />}
            offImage={<BsToggleOff />}
            isOn={servoState}
            handleOnBtn={handleOnServo}
            handleOffBtn={handleOffServo}
            isLoading={servoToggleLoading}
          />
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const allCookies = cookies(context);
    axios.defaults.headers.Authorization = `Bearer ${allCookies.access_token}`;

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
