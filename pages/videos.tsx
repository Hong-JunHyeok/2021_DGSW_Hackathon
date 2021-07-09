import React from "react";
import { END } from "redux-saga";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import Video from "../components/Video";
import { GET_VIDEOS_REQUEST } from "../modules/video";
import wrapper from "../store";

const VideoLayout = styled.div`
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

const Videos = () => {
  return (
    <AppLayout>
      <VideoLayout>
        <h1>🕵️ 초음파 센서에 접근한 사람을 감지합니다.</h1>
        <Video />
      </VideoLayout>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: GET_VIDEOS_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Videos;
