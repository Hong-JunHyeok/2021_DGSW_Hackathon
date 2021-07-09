import React, { VFC } from "react";
import { TerminalContainer } from "./styles";

interface IProps {
  placeholder: string;
}

const SqlCommander: VFC<IProps> = ({ placeholder }) => {
  return (
    <TerminalContainer>
      <header>
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </header>
      <input type="text" placeholder={placeholder} />
    </TerminalContainer>
  );
};

export default SqlCommander;
