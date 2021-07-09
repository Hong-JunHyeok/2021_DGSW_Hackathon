import React, { VFC } from "react";
import JSONViewer from "react-json-viewer";
import { DataList } from "./styles";

interface Props {
  dataList: Array<any>;
}

const SqlDataList: VFC<Props> = ({ dataList }) => {
  return (
    <DataList>
      <h1>🔎 검색된 결과</h1>
      {dataList.map((data) => {
        return <JSONViewer key={data.id} json={data} />;
      })}
    </DataList>
  );
};

export default SqlDataList;
