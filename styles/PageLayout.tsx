import styled from "styled-components";

export const PageLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: GmarketSansBold;
  }
  span {
    /* margin-bottom: 10px; */
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .col {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
  }
  .flex_wrap {
    width: 800px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
