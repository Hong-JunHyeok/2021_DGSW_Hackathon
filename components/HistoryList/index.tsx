import React, { VFC } from "react";
import { Container } from "./styles";

interface Props {
  historyList: Array<any>;
  title: string;
}

const HistoryList: VFC<Props> = ({ historyList, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="header">
        <div className="time">시간</div>
        <div className="name">조작자</div>
        <div className="status">상태</div>
      </div>
      {historyList.map((history) => (
        <li key={history.id}>
          <div className="time">{history.time}</div>
          <div className="name">{history.user_name}</div>
          <div className="status">
            {history.status === 0 ? (
              <span className="war"></span>
            ) : (
              <span className="safe"></span>
            )}
          </div>
        </li>
      ))}
    </Container>
  );
};

export default HistoryList;
