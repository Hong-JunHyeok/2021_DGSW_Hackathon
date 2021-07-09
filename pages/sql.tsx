import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import SqlCommander from "../components/SqlCommander";

const SqlLayout = styled.div`
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

const Sql = () => {
  return (
    <AppLayout>
      <SqlLayout>
        <h1>SQL문으로 더 많은 기능을 사용해보세요.</h1>
        <span>🚨주의 | 인증된 유저만 사용할 수 있는 기능입니다.</span>
        <SqlCommander placeholder="ex) SELECT * FROM user" />
      </SqlLayout>
    </AppLayout>
  );
};

export default Sql;
