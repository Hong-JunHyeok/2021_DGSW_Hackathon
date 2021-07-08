import Head from "next/head";
import React, { FC } from "react";
import { Header } from "./styles";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
