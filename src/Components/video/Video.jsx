import React, { useState, useRef } from "react";
import "./video.css";
// import { useRef, useState } from "react";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__content"
        src="https://v16-webapp.tiktok.com/e4acd1d6617991162bdd67a44528d24d/62584776/video/tos/useast2a/tos-useast2a-ve-0068c001/9a3edbe7c4bb4b8081383916fb376214/?a=1988&br=612&bt=306&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HF2Myq8ZJf~hwe2N9twyl7Gb&l=2022041410084101019018602909029870&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anY6dzQ6ZmU4PDMzNzczM0ApOjk4N2U8ZWU0NzxnZWgzO2c1NDVscjQwZC1gLS1kMTZzczJiYV8xNTJeYDYuYzYwL146Yw%3D%3D&vl=&vr="
        ref={videoRef}
        onClick={onVideoPress}></video>
    </div>
  );
}

export default Video;
