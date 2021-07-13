import styled from "styled-components";

export const Container = styled.ul`
  width: 80%;
  margin: 10px;
  .header {
    background-color: #3181f6;
    padding: 30px;
    display: flex;
    font-weight: bold;
    font-size: 1.2rem;
    .admin_level {
      flex: 3;
    }
    .name {
      flex: 5;
    }
  }
  li {
    display: flex;
    align-items: center;
    padding: 30px;
    position: relative;
    &:nth-child(even) {
      background-color: #d9dadb;
    }
    .admin_level {
      flex: 3;
    }
    .name {
      flex: 5;
      font-size: 28px;
    }
    .grant {
      position: absolute;
      right: 10px;
    }
  }
`;
