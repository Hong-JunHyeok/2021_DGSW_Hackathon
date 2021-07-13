import React, { useCallback, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useInput from "../../hooks/useInput";
import { LOG_IN_REQUEST, SIGN_UP_REQUEST } from "../../modules/user";
import Button from "../Button";
import { ModalContainer } from "./styles";

interface Props {
  closeModal: () => void;
  setIsLoginComponent: any;
}

const SignUpForm: VFC<Props> = ({ closeModal, setIsLoginComponent }) => {
  const dispatch = useDispatch();

  const { signUpDone } = useSelector((state: any) => state.user);

  const [name, onChangeName] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: SIGN_UP_REQUEST,
        payload: {
          name,
          password,
        },
      });

      closeModal();
    },
    [name, password, signUpDone]
  );

  return (
    <ModalContainer>
      <h1>회원가입</h1>
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
        <Button onClick={handleSubmit}>회원가입</Button>
      </form>
      <div className="go_link" onClick={() => setIsLoginComponent(true)}>
        로그인
      </div>
    </ModalContainer>
  );
};

export default SignUpForm;
