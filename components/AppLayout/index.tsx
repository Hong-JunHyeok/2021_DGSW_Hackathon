import Head from "next/head";
import React, { FC } from "react";
import { Content, Footer, NavBar } from "./styles";
import Link from "next/link";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar>
        <div className="container">
          <div className="logo"></div>
          <ul className="content">
            <li>
              <Link href="/">Main</Link>
            </li>
            <li>
              <Link href="/">IOT Manager</Link>
            </li>
            <li>
              <Link href="/">SQL commander</Link>
            </li>
          </ul>
        </div>
      </NavBar>
      <Content>{children}</Content>
      <Footer>All Copyright reserved DGOT</Footer>
    </>
  );
};

export default AppLayout;
