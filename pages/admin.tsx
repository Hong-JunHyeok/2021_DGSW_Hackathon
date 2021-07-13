import { END } from "redux-saga";
import axios from "axios";
import cookies from "next-cookies";
import React from "react";
import AppLayout from "../components/AppLayout";
import { GET_MY_INFO_REQUEST, GET_USERS_REQUEST } from "../modules/user";
import wrapper from "../store";
import { PageLayout } from "../styles/PageLayout";
import AdminList from "../components/AdminList";
import { useSelector } from "react-redux";

const Admin = () => {
  const { usersData } = useSelector((state: any) => state.user);

  return (
    <AppLayout>
      <PageLayout>
        <h1>유저를 조회하고, 관리자 권한을 부여해주세요.</h1>
        <AdminList usersData={usersData} />
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
      type: GET_USERS_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask!.toPromise();
  }
);

export default Admin;
