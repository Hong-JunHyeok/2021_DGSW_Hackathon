import React, { FC } from "react";
import { AppProps } from "next/app";
import { Reset } from "styled-reset";
import Head from "next/head";
import { GlobalStyle } from "../styles/GlobalStyle";

const MyApp: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Head>
        <meta charSet="UTF-8" />
        <title>DGOT</title>
      </Head>
      <Component />
    </>
  );
};

export default MyApp;
