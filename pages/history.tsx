import React from "react";
import AppLayout from "../components/AppLayout";
import wrapper from "../store";
import cookies from "next-cookies";
import axios from "axios";
import { END } from "redux-saga";
import { GET_HISTORY_REQUEST } from "../modules/history";
import { useSelector } from "react-redux";
import HistoryList from "../components/HistoryList";
import styled from "styled-components";
import { GET_MY_INFO_REQUEST } from "../modules/user";
import { PageLayout } from "../styles/PageLayout";

const History = () => {
  const { led, servo } = useSelector(
    (state: any) => state.history?.historyData
  );

  return (
    <AppLayout>
      <PageLayout>
        <h1>조작된 기기들의 History를 조회합니다.</h1>
        <div className="row">
          <HistoryList historyList={led} title="LED" isLed />
          <HistoryList historyList={servo} title="Servo" isLed={false} />
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    axios.defaults.headers.Authorization = "";
    const cookie = context.req ? cookies(context).access_token : "";

    if (context.req && cookie) {
      axios.defaults.headers.Authorization = `Bearer ${cookie}`;
    }

    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: GET_HISTORY_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default History;
