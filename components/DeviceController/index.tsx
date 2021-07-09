import React, { FC } from "react";
import Button from "../Button";
import { Container } from "./styles";
import Loader from "react-loader-spinner";

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
      {isLoading ? (
        <Loader type="Puff" color="#00BFFF" height={50} />
      ) : isOn ? (
        onImage
      ) : (
        offImage
      )}
      <div className="row">
        <Button onClick={handleOnBtn}>ON</Button>
        <Button onClick={handleOffBtn}>OFF</Button>
      </div>
    </Container>
  );
};

export default DeviceController;
