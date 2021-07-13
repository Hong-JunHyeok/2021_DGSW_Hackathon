import styled from "styled-components";

export const VideoList = styled.ul`
  width: 1200px;
  .item {
    h2 {
      font-size: 24px;
    }
    .row {
      align-items: center;
      h2 {
        margin-bottom: 20px;
        font-size: 16px;
      }
    }
    .video_item {
      justify-content: space-around;
    }
    padding: 20px;
    border-bottom: 1px solid gray;
    img {
      width: 500px;
      height: 300px;
      display: inline-block;
    }
  }
`;
