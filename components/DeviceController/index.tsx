import React, { FC } from "react";
import Button from "../Button";
import { Container } from "./styles";

interface IProps {
  title: string;
  offImage?: React.ReactNode;
  onImage?: React.ReactNode;
  handleOnBtn?: () => void;
  handleOffBtn?: () => void;
  isOn: boolean;
  isLoading: boolean;
}

const DeviceController: FC<IProps> = ({
  title,
  offImage,
  handleOnBtn,
  handleOffBtn,
  isOn,
  onImage,
  isLoading,
}) => {
  return (
    <Container>
      <h1>{title}</h1>
      {isLoading ? "로딩중" : isOn ? onImage : offImage}
      <div className="row">
        <Button onClick={handleOnBtn}>ON</Button>
        <Button onClick={handleOffBtn}>OFF</Button>
      </div>
    </Container>
  );
};

export default DeviceController;
