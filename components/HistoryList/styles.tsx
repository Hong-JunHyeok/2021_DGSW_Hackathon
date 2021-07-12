import styled from "styled-components";

export const Container = styled.ul`
  width: 30%;
  margin: 10px;
  .header {
    background-color: #3181f6;
    padding: 10px;
    display: flex;
    font-size: 20px;
    .time {
      flex: 6;
    }
    .name {
      flex: 2;
    }
    .status {
      flex: 2;
    }
  }
  li {
    display: flex;
    padding: 10px;
    border: 1px solid black;
    border-collapse: collapse;
    .time {
      flex: 6;
    }
    .name {
      flex: 2;
    }
    .status {
      flex: 2;
    }
  }
`;
