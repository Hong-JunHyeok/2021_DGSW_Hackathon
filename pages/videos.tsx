import axios from "axios";
import cookies from "next-cookies";
import React from "react";
import { END } from "redux-saga";
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
    axios.defaults.headers.Authorization = "";
    const cookie = context.req ? cookies(context).access_token : "";

    if (context.req && cookie) {
      axios.defaults.headers.Authorization = `Bearer ${cookie}`;
    }

    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });

    context.store.dispatch({
      type: GET_VIDEOS_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Videos;
