import React, { useCallback, useEffect, useState, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { LOG_IN_REQUEST } from "../../modules/user";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { useCookies } from "react-cookie";
import { RootState } from "../../modules";
import { toast } from "react-toastify";

interface Props {
  closeModal: () => void;
  setIsLoginComponent: any;
}

const LoginForm: VFC<Props> = ({ closeModal, setIsLoginComponent }) => {
  const dispatch = useDispatch();

  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const { loginDone, loginLoading } = useSelector((state: any) => state.user);

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
    [name, password, loginDone]
  );

  return (
    <ModalContainer>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="아이디"
        />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        />
        <Button onClick={handleSubmit}>
          {loginLoading ? "로딩 중" : "로그인"}
        </Button>
      </form>
      <div className="go_link" onClick={() => setIsLoginComponent(false)}>
        회원가입
      </div>
    </ModalContainer>
  );
};

export default LoginForm;
