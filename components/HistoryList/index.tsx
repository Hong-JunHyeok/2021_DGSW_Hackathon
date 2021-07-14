import React, { VFC } from "react";
import { LED_LIST } from "../../array/ledList";
import { getExcludeGMT } from "../../util/dateFormatter";
import { Container } from "./styles";

interface Props {
  historyList: Array<any>;
  title: string;
  isLed: boolean;
}

const HistoryList: VFC<Props> = ({ historyList, title, isLed }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div className="header">
        <div className="time">시간</div>
        <div className="name">조작자</div>
        {isLed && <div className="index">LED</div>}
        <div className="status">상태</div>
      </div>
      {historyList.map((history) => (
        <li key={history.id}>
          <div className="time">{getExcludeGMT(history.time)}</div>
          <div className="name">{history.user_name}</div>
          {isLed && (
            <div className="index">{LED_LIST[history.led_number - 1]}</div>
          )}
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
