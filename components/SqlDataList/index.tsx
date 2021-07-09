import React, { VFC } from "react";
import JSONViewer from "react-json-viewer";
import { DataList } from "./styles";

interface Props {
  dataList: Array<any>;
  loading: boolean;
}

const SqlDataList: VFC<Props> = ({ dataList, loading }) => {
  return (
    <DataList>
      <h1>🔎 검색된 결과</h1>

      {loading ? (
        <>검색중</>
      ) : (
        dataList.map((data) => {
          return <JSONViewer key={data.id} json={data} />;
        })
      )}
    </DataList>
  );
};

export default SqlDataList;
