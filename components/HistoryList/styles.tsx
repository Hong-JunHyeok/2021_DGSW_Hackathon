import styled from "styled-components";

export const Container = styled.ul`
  width: 30%;
  margin: 10px;
  .header {
    background-color: #3181f6;
    padding: 10px;
    display: flex;
    font-size: 20px;
    color: white;
    .time {
      flex: 6;
    }
    .name {
      flex: 2;
    }
    .status {
      flex: 2;
    }
    .index {
      flex: 2;
    }
  }
  li {
    display: flex;
    padding: 10px;
    border-collapse: collapse;
    margin-bottom: 0;
    &:nth-child(even) {
      background-color: #d9dadb;
    }
    .time {
      flex: 6;
    }
    .name {
      flex: 2;
      font-weight: bold;
    }
    .status {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;

      .war {
        display: flex;
        background-color: #ff605c;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
      .safe {
        display: flex;
        background-color: #00ca4e;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
    }
    .index {
      flex: 2;
    }
  }
`;
