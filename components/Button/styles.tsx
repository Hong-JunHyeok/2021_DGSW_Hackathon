import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 178px;
  height: 71px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 22px;
  color: rgb(255, 255, 255);
  line-height: 1.6;
  display: flex;
  margin: 0px auto;
  background-color: #3181f6;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
