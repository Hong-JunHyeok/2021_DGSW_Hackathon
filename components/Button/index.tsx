import React, { ButtonHTMLAttributes, FC, HTMLProps, VFC } from "react";
import { ButtonStyle } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  style,
  loading,
  ...props
}) => {
  return (
    <ButtonStyle onClick={onClick} style={style}>
      {loading ? "로딩 중..." : children}
    </ButtonStyle>
  );
};

export default Button;
