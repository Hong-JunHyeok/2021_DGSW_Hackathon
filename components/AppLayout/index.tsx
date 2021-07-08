import React, { FC } from "react";
import { Content, Footer, NavBar } from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const AppLayout: FC = ({ children }) => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <>
      <NavBar>
        <div className="container">
          <div className="logo"></div>
          <ul className="content">
            <li className={"/" === pathname ? "active" : ""}>
              <Link href="/">Main</Link>
            </li>
            <li className={"/manage" === pathname ? "active" : ""}>
              <Link href="/manage">IOT Manager</Link>
            </li>
            <li className={"/sql" === pathname ? "active" : ""}>
              <Link href="/sql">SQL commander</Link>
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
