import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import SqlCommander from "../components/SqlCommander";
import SqlDataList from "../components/SqlDataList";
import { PageLayout } from "../styles/PageLayout";

const Sql = () => {
  const { dbSearchResult, dbSearchLoading } = useSelector(
    (state: any) => state.db
  );

  return (
    <AppLayout>
      <PageLayout>
        <h1>SQL문으로 더 많은 기능을 사용해보세요.</h1>
        <span>🚨주의 | 로그인 인증된 유저만 사용할 수 있는 기능입니다.</span>
        <SqlCommander placeholder="ex) SELECT * FROM users" />
        <SqlDataList dataList={dbSearchResult} loading={dbSearchLoading} />
      </PageLayout>
    </AppLayout>
  );
};

export default Sql;
