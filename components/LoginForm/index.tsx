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
  setIsLoginComponent: any;
}

const LoginForm: VFC<Props> = ({ closeModal, setIsLoginComponent }) => {
  const dispatch = useDispatch();

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

  return (
    <ModalContainer>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="password" value={password} onChange={onChangePassword} />
        <Button onClick={handleSubmit}>로그인</Button>
      </form>
      <div className="go_link" onClick={() => setIsLoginComponent(false)}>
        회원가입
      </div>
    </ModalContainer>
  );
};

export default LoginForm;
