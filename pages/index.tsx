import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import MainContent from "../components/MainContent";
import wrapper from "../store";
import cookies from "next-cookies";
import axios from "axios";
import { GET_MY_INFO_REQUEST } from "../modules/user";
import { END } from "redux-saga";

const IndexPage = () => {
  return (
    <AppLayout>
      <MainContent />
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

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default IndexPage;
