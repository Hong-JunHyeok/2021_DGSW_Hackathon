import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
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
    const allCookies = cookies(context);

    axios.defaults.headers.Authorization = "";
    if (context.req && allCookies.access_token) {
      axios.defaults.headers.Authorization = `Bearer ${allCookies.access_token}`;
    }

    context.store.dispatch({
      type: GET_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default IndexPage;
