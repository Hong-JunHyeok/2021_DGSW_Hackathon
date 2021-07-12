import React, { useCallback, useEffect, useState, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { LOG_IN_REQUEST } from "../../modules/user";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { useCookies } from "react-cookie";
import { RootState } from "../../modules";

interface Props {
  closeModal: () => void;
}

const LoginForm: VFC<Props> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { me, loginDone } = useSelector((state: any) => state.user);

  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: LOG_IN_REQUEST,
        payload: {
          name,
          password,
        },
      });

      closeModal();
    },
    [name, password]
  );
  // ! 토큰 저장 오류 해결 할 것
  return (
    <ModalContainer>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="password" value={password} onChange={onChangePassword} />
        <Button onClick={handleSubmit}>로그인</Button>
      </form>
    </ModalContainer>
  );
};

export default LoginForm;
