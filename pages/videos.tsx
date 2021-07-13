import axios from "axios";
import cookies from "next-cookies";
import React from "react";
import { END } from "redux-saga";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import Video from "../components/Video";
import { GET_MY_INFO_REQUEST } from "../modules/user";
import { GET_VIDEOS_REQUEST } from "../modules/video";
import wrapper from "../store";
import { PageLayout } from "../styles/PageLayout";

const Videos = () => {
  return (
    <AppLayout>
      <PageLayout>
        <h1>🕵️ 초음파 센서에 접근한 사람을 감지합니다.</h1>
        <Video />
      </PageLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const allCookies = cookies(context);

    axios.defaults.headers.Authorization = "";
    if (context.req && allCookies.access_token) {
      axios.defaults.headers.Authorization = `Bearer ${allCookies.access_token}`;
    }

    context.store.dispatch({
      type: GET_VIDEOS_REQUEST,
    });

    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Videos;
