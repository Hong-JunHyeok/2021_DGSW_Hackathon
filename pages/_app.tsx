import React, { FC } from "react";
import { AppProps } from "next/app";
import { Reset } from "styled-reset";
import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyle";
import { NextPage } from "next";
import wrapper from "../store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp: NextPage<AppProps> = ({ Component }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <title>DGOT</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
        </style>
      </Head>
      <Component />
      <ToastContainer />
      <div id="root-modal"></div>
    </>
  );
};

export default wrapper.withRedux(MyApp);
