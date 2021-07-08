import styled from "styled-components";
import main from "../../public/images/main.png";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${main.src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #2f2f2f;
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    font-family: GmarketSansBold !important;
  }
  p {
    color: #2f2f2f;
    font-size: 14px;
  }
`;
