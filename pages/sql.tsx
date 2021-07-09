import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import SqlCommander from "../components/SqlCommander";
import SqlDataList from "../components/SqlDataList";

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
  const { dbSearchResult, dbSearchLoading } = useSelector(
    (state: any) => state.db
  );

  return (
    <AppLayout>
      <SqlLayout>
        <h1>SQL문으로 더 많은 기능을 사용해보세요.</h1>
        <span>🚨주의 | 로그인 인증된 유저만 사용할 수 있는 기능입니다.</span>
        <SqlCommander placeholder="ex) SELECT * FROM users" />
        <SqlDataList dataList={dbSearchResult} loading={dbSearchLoading} />
      </SqlLayout>
    </AppLayout>
  );
};

export default Sql;
