import React from "react";
import { useSelector } from "react-redux";
import { makeJpg, removeH264 } from "../../util/urlFormatter";
import { VideoList } from "./styles";
import axios from "axios";
import Button from "../Button";
import { RootState } from "../../modules";

const Video = () => {
  const { videoData } = useSelector((state: any) => state.video);

  return (
    <VideoList>
      {videoData?.map((video: any) => {
        return (
          <li className="item">
            <h2>{`녹화된 시간 : ${removeH264(video)}`}</h2>
            <div className="row">
              <img
                src={`${axios.defaults.baseURL}/static/images/${makeJpg(
                  video
                )}`}
              />
              <Button
                onClick={() =>
                  window.open(
                    `${axios.defaults.baseURL}/static/videos/${video}`
                  )
                }
              >
                동영상 다운로드
              </Button>
            </div>
          </li>
        );
      })}
    </VideoList>
  );
};

export default Video;
