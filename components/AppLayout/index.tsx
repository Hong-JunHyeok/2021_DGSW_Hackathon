import React, { FC } from "react";
import { Content, Footer, NavBar } from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const AppLayout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const { me } = useSelector((state: any) => state.user);

  return (
    <>
      <NavBar>
        <div className="container">
          <div className="user">{me ? `${me.name}님, 환영합니다.` : null}</div>
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
            <li className={"/videos" === pathname ? "active" : ""}>
              <Link href="/videos">Videos</Link>
            </li>
            <li className={"/history" === pathname ? "active" : ""}>
              <Link href="/history">history</Link>
            </li>
            {me?.isAdmin ? (
              <li className={"/admin" === pathname ? "active" : ""}>
                <Link href="/admin">admin</Link>
              </li>
            ) : (
              "일반 회원입니다."
            )}
          </ul>
        </div>
      </NavBar>
      <Content>{children}</Content>
      <Footer>All Copyright reserved DGOT</Footer>
    </>
  );
};

export default AppLayout;
