import styled from "styled-components";

export const NavBar = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  .nav_no_top {
    border-bottom: 1px solid black;
  }
  .container {
    padding: 10px;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    .logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #3181f6;
    }
    .content {
      display: flex;
      width: 500px;
      justify-content: space-around;
      align-items: center;
      .active {
        font-weight: bold;
      }
      li > a {
        padding: 20px;
        text-decoration: none;
        color: black;
        border-radius: 10px;
      }
      li > a:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

export const Content = styled.main`
  min-height: 80vh;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #191f28;
  color: #b0b8c1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
