import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    padding: 10px;
    text-align: center;
    font-family: "Noto Sans KR", sans-serif !important;
  }
  svg {
    width: 100%;
    height: 50%;
  }
  button {
    margin-bottom: 10px;
  }
`;
