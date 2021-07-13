import styled from "styled-components";

export const NavBar = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  z-index: 10;
  .nav_no_top {
    border-bottom: 1px solid black;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      .user {
        text-align: center;
        font-size: 38px;
      }
      .content {
        display: none;
        flex-direction: column;
        font-size: 24px;
        li {
          text-align: center;
          width: 500px;
        }
        li > a {
          padding: 0px !important;
        }
      }
      .toggle {
        display: flex !important;
        justify-content: flex-end;
        width: 100%;
      }
      .active + .content {
        display: flex;
      }
    }
    .user {
      display: flex;
      align-items: center;
      height: 50px;
      font-size: 20px;
    }
    .content {
      display: flex;
      width: 750px;
      justify-content: space-around;
      align-items: center;
      .active {
        font-weight: bold;
      }
      li {
        cursor: pointer;
        display: flex;
        padding: 0 10px;
        align-items: center;
        height: 100%;
      }
      li > a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      li:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
    .toggle {
      display: none;
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
