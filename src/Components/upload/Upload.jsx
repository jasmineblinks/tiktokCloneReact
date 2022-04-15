import React from "react";
import "./upload.css";

import UploadBanner from "../uploadbanner/UploadBanner";
import ProfileHeader from "../profileheader/ProfileHeader";
const Upload = () => {
  return (
    <div>
      <ProfileHeader />
      <UploadBanner />
    </div>
  );
};

export default Upload;
