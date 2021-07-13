import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 130px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
  h1 {
    padding: 10px;
    font-size: 18px !important;
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

export const LedContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 30px;
  border-radius: 70%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
