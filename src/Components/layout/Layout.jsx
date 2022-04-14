import React from "react";
import Video from "../video/Video";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout-banner">
      <div className="video-collection">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
};

export default Layout;
