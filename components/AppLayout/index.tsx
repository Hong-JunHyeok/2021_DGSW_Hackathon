import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Content, Footer, NavBar } from "./styles";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { LOG_OUT } from "../../modules/user";
import { remove } from "js-cookie";
import router from "next/router";
import { RiArrowUpDownLine } from "react-icons/ri";

const AppLayout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const { me } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const contentDom = useRef<HTMLUListElement>(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT,
    });
    remove("access_token");
  }, []);

  useEffect(() => {
    if (!me) {
      router.push("/");
    }
  }, [me]);

  if (pathname !== "/" && !me) {
    return <h1>로딩 중...</h1>;
  }

  return (
    <>
      <NavBar>
        <div className="container">
          <div className="user">
            {me ? (
              <>
                <b
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {me.name}
                </b>
                님, 환영합니다.
              </>
            ) : null}
          </div>
          <ul className="content" ref={contentDom}>
            <li className={"/" === pathname ? "active" : ""}>
              <Link href="/">Main</Link>
            </li>
            <li className={"/manage" === pathname ? "active" : ""}>
              <Link href="/manage">IoT Manager</Link>
            </li>
            {me?.isAdmin === 2 && (
              <li className={"/sql" === pathname ? "active" : ""}>
                <Link href="/sql">SQL commander</Link>
              </li>
            )}
            {me?.isAdmin !== 0 && (
              <>
                <li className={"/videos" === pathname ? "active" : ""}>
                  <Link href="/videos">Videos</Link>
                </li>
                <li className={"/history" === pathname ? "active" : ""}>
                  <Link href="/history">History</Link>
                </li>
              </>
            )}

            <li className={"/admin" === pathname ? "active" : ""}>
              <Link href="/admin">Admin</Link>
            </li>

            {me && (
              <>
                <li>
                  <Button
                    style={{
                      width: "80px",
                      height: "40px",
                      fontSize: "12px",
                    }}
                    onClick={handleLogout}
                  >
                    로그아웃
                  </Button>
                </li>
              </>
            )}
          </ul>
          <div
            className="toggle"
            onClick={() => {
              setToggleMenu((prev) => !prev);
              if (toggleMenu) {
                contentDom.current!.style.display = "flex";
              } else {
                contentDom.current!.style.display = "none";
              }
            }}
          >
            <RiArrowUpDownLine />
          </div>
        </div>
      </NavBar>
      <Content>{children}</Content>
      <Footer>All Copyright reserved DGOT</Footer>
    </>
  );
};

export default AppLayout;
