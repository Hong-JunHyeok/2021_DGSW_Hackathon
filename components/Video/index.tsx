import React from "react";
import { useSelector } from "react-redux";
import { makeJpg } from "../../util/urlFormatter";
import { VideoList } from "./styles";
import axios from "axios";

const Video = () => {
  const { videoData } = useSelector((state: any) => state.video);

  return (
    <VideoList>
      {videoData?.map((video: any) => {
        return (
          <li className="item">
            <h1>{video}</h1>
            <img
              src={`${axios.defaults.baseURL}/static/images/${makeJpg(video)}`}
            />
          </li>
        );
      })}
    </VideoList>
  );
};

export default Video;
