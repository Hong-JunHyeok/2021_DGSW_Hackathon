import { useRouter } from "next/dist/client/router";
import React from "react";
import Button from "../Button";
import { Container } from "./styles";

const MainContent = () => {
  const { push } = useRouter();
  return (
    <Container>
      <h1>
        더 나은 미래를 위해 <br />
        DGOT 하세요.
      </h1>
      <p>
        DGOT는 웹과 IOT를 연결해, 사용자가 더욱 쉽게 접근하게 할 수 있는
        플렛폼입니다.
      </p>
      <Button
        onClick={() => {
          push("/manage");
        }}
      >
        시작하기
      </Button>
    </Container>
  );
};

export default MainContent;
