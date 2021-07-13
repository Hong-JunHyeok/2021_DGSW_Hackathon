import React, { useCallback, VFC } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { DB_SEARCH_REQUEST } from "../../modules/db";
import { TerminalContainer } from "./styles";

interface IProps {
  placeholder: string;
}

const SqlCommander: VFC<IProps> = ({ placeholder }) => {
  const [sql, onChangeSql] = useInput("");
  const dispatch = useDispatch();

  const searchDb = useCallback(() => {
    dispatch({
      type: DB_SEARCH_REQUEST,
      payload: sql,
    });
  }, [sql]);

  return (
    <TerminalContainer>
      <header>
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </header>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChangeSql}
        value={sql}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchDb();
          }
        }}
      />
    </TerminalContainer>
  );
};

export default SqlCommander;
