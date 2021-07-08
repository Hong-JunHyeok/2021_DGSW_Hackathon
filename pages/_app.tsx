import React, { FC } from "react";
import Head from "next/head";
import { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

export default MyApp;
