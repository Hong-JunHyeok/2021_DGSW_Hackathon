import React, { useCallback, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GRANT_USER_REQUEST, UNGRANT_USER_REQUEST } from "../../modules/user";
import Button from "../Button";
import { Container } from "./styles";

interface Props {
  usersData: Array<any>;
}

const AdminList: VFC<Props> = ({ usersData }) => {
  const { isAdmin } = useSelector((state: any) => state.user.me);
  const { usersError, grantLoading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleGrant = useCallback((user_id: number) => {
    dispatch({
      type: GRANT_USER_REQUEST,
      payload: user_id,
    });
  }, []);

  const handleUngrant = useCallback((user_id: number) => {
    dispatch({
      type: UNGRANT_USER_REQUEST,
      payload: user_id,
    });
  }, []);

  if (usersError) {
    return <>에러가 발생했습니다.</>;
  }

  return (
    <>
      <Container>
        <div className="header">
          <div className="admin_level">회원 등급</div>
          <div className="name">회원 이름</div>
        </div>
        {usersData.map((user) => {
          return (
            <li key={user.id}>
              <div className="admin_level">
                {user?.isAdmin === 0
                  ? "일반 회원"
                  : user.isAdmin === 1
                  ? "관리자"
                  : "최고 관리자"}
              </div>
              <div className="name">{user?.name}</div>
              {isAdmin === 2 && user?.isAdmin !== 2 && (
                <div className="grant">
                  {user.isAdmin === 0 ? (
                    <Button
                      style={{
                        width: "100px",
                        height: "30px",
                        fontSize: "12px",
                      }}
                      onClick={() => handleGrant(user.id)}
                      loading={grantLoading}
                    >
                      권한부여
                    </Button>
                  ) : (
                    <Button
                      style={{
                        width: "100px",
                        height: "30px",
                        fontSize: "12px",
                        backgroundColor: "red",
                      }}
                      onClick={() => handleUngrant(user.id)}
                      loading={grantLoading}
                    >
                      권한제거
                    </Button>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </Container>
    </>
  );
};

export default AdminList;
