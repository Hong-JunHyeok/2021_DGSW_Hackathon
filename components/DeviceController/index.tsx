import React, { FC, VFC } from "react";
import { Container, LedContainer } from "./styles";
import Loader from "react-loader-spinner";
import { CSSProperties } from "styled-components";

interface IProps {
  title: string;
  offImage?: React.ReactNode;
  onImage?: React.ReactNode;
  handler?: any;
  isOn: boolean;
  isLoading?: boolean;
  customStyle?: CSSProperties;
}

const DeviceController: FC<IProps> = ({
  title,
  offImage,
  handler,
  isOn,
  onImage,
  isLoading,
  customStyle,
}) => {
  return (
    <Container style={customStyle} onClick={handler}>
      <h1>{title}</h1>
      {isLoading ? (
        <Loader type="Puff" color="#00BFFF" height={50} />
      ) : isOn ? (
        onImage
      ) : (
        offImage
      )}
    </Container>
  );
};

interface LedProps {
  ledNum: number;
}

export const LedController: VFC<LedProps> = ({ ledNum }) => {
  return <LedContainer>LED {ledNum}</LedContainer>;
};

export default DeviceController;
