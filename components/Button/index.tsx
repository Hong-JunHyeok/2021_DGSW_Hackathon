import React, { ButtonHTMLAttributes, FC, HTMLProps, VFC } from "react";
import { ButtonStyle } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
