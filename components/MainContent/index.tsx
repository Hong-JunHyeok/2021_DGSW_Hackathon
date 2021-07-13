import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Button from "../Button";
import { Container } from "./styles";
import useModal from "../../hooks/useModal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { useSelector } from "react-redux";

const MainContent = () => {
  const { push } = useRouter();
  const { me } = useSelector((state: any) => state.user);
  const { ModalPortal, openModal, closeModal } = useModal();

  const [isLoginComponent, setIsLoginComponent] = useState(true);

  return (
    <Container>
      <h1>
        {me
          ? `환영합니다. ${me.name}님`
          : `더 나은 미래를 위해
        DGOT 하세요.`}
      </h1>
      <p>
        DGOT는 웹과 IOT를 연결해, 사용자가 더욱 쉽게 접근하게 할 수 있는
        플렛폼입니다.
      </p>
      {me ? (
        <Button
          onClick={() => {
            push("/manage");
          }}
        >
          시작하기
        </Button>
      ) : (
        <Button
          onClick={() => {
            openModal();
          }}
        >
          로그인
        </Button>
      )}

      <ModalPortal>
        {isLoginComponent ? (
          <LoginForm
            closeModal={closeModal}
            setIsLoginComponent={setIsLoginComponent}
          />
        ) : (
          <SignUpForm
            closeModal={closeModal}
            setIsLoginComponent={setIsLoginComponent}
          />
        )}
      </ModalPortal>
    </Container>
  );
};

export default MainContent;
