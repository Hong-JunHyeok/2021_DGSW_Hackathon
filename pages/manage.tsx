import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import DeviceController from "../components/DeviceController";
import { GoLightBulb } from "react-icons/go";
import { HiLightBulb } from "react-icons/hi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { LED_TOGGLE_REQUEST, SERVO_TOGGLE_REQUEST } from "../modules/device";

const ManageLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: GmarketSansBold;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
`;

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
      <ManageLayout>
        <h1>기기들의 상태 확인과 기기 조작을 해보세요.</h1>
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
      </ManageLayout>
    </AppLayout>
  );
};

export default Manage;
