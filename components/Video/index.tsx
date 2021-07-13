import React from "react";
import { useSelector } from "react-redux";
import { makeJpg, removeH264 } from "../../util/urlFormatter";
import { VideoList } from "./styles";
import axios from "axios";
import Button from "../Button";
import dateFormatter from "../../util/dateFormatter";

const Video = () => {
  const { videoData } = useSelector((state: any) => state.video);

  return (
    <VideoList>
      {videoData?.map((video: any) => {
        return (
          <li className="item">
            <div className="row video_item">
              <img
                src={`${axios.defaults.baseURL}/static/images/${makeJpg(
                  video
                )}`}
              />
              <div className="col">
                <h2>{`녹화된 시간 : ${dateFormatter(removeH264(video))}`}</h2>
                <Button
                  onClick={() =>
                    window.open(
                      `${axios.defaults.baseURL}/static/videos/${video}`
                    )
                  }
                >
                  Download
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </VideoList>
  );
};

export default Video;
