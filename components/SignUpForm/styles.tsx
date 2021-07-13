import styled from "styled-components";

export const ModalContainer = styled.div`
  /* width: 480px;
  height: 614px; */
  background-color: white;
  z-index: 11;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  h1 {
    font-size: 36px;
    font-weight: bold;
    font-family: "GmarketSansBold";
  }
  form {
    margin-top: calc(100% / 4);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  input {
    width: 300px;
    border: none;
    border-bottom: 1px solid #3181f6;
    margin: 5px;
    padding: 10px;
  }
  button {
    margin-top: 20px;
  }
  .go_link {
    margin-top: 10px;
    color: #3181f6;
    font-weight: bold;
    cursor: pointer;
  }
`;
