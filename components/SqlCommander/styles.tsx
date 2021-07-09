import styled from "styled-components";

export const TerminalContainer = styled.div`
  width: 70%;
  margin-top: 20px;
  header {
    width: 100%;
    height: 10px;
    background-color: darkgray;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    display: flex;
    div {
      width: 12px;
      height: 12px;
      border-radius: 70%;
      margin-right: 10px;
    }
    .red {
      background-color: red;
    }
    .yellow {
      background-color: yellow;
    }
    .green {
      background-color: green;
    }
  }
  input {
    border: none;
    padding: 10px;
    width: 100%;
    height: 30px;
    background-color: black;
    color: white;
    border-radius: 0 0 20px 20px;
    outline: none;
    ::placeholder {
      color: white;
    }
  }
`;
