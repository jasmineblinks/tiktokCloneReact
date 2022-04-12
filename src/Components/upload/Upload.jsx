import React from "react";
import ProfileHeader from "../profileheader/ProfileHeader";
import "./upload.css";
import upload from "../../images/upload.svg";
import { Form } from "react-bootstrap";
import UploadBanner from "../uploadbanner/UploadBanner";
const Upload = () => {
  return (
    // <div className="header-banner">
    //   <ProfileHeader />
    //   <div className="container">
    //     <div className="text">
    //       <h3>Upload video</h3>
    //       <h4>Post a video to your account</h4>
    //     </div>
    //     <div className="flex-card">
    //       <div className="zone">
    //         <div className="dropZ">
    //           <img src={upload} alt="logo" />
    //           <div>
    //             <h4>Select video to upload</h4>
    //           </div>
    //           <span>Or drag and drop a file</span>
    //           <p>MP4 or WebM</p>
    //           <span>
    //             720x1280 resolution or higher up to 180 seconds Less than 1GB
    //           </span>
    //           <div class="selectFile">
    //             <label for="file">Select file</label>
    //             <input
    //               className="input-text"
    //               type="file"
    //               name="files[]"
    //               id="file"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="form-element">
    //         <label htmlFor="">Caption</label>

    //         <input type="text" name="" id="" />

    //         <label htmlFor="">Cover</label>
    //         <textarea name="" id="" cols="30" rows="10"></textarea>

    //         <label htmlFor="">Who can view this video</label>

    //         <Form.Select size="sm">
    //           <option>Public</option>
    //           <option>Friends</option>
    //           <option>Private</option>
    //         </Form.Select>
    //         <label htmlFor="">Allow users to:</label>
    //         <div>
    //           <form className="checked-input">
    //             <input
    //               type="checkbox"
    //               id="comment"
    //               name="comment"
    //               value="comment"
    //               checked="checked"
    //             />
    //             <label for="vehicle1"> Comment</label>
    //             <input
    //               type="checkbox"
    //               id="duet"
    //               name="duet"
    //               value="duet"
    //               checked="checked"
    //             />
    //             <label for="vehicle2"> Duet</label>
    //             <input
    //               type="checkbox"
    //               id="stitch"
    //               name="stitch"
    //               value="stitch"
    //               checked="checked"
    //             />
    //             <label for="vehicle3"> Stitch</label>
    //             <input type="checkbox" checked="checked" />
    //             <span class="checkmark"></span>
    //           </form>
    //         </div>
    //         <div style={{ display: "flex" }}>
    //           <label htmlFor="">Run a copy check</label>
    //           <Form.Check
    //             style={{ fontSize: "25px" }}
    //             type="switch"
    //             id="custom-switch"
    //           />
    //         </div>
    //         <p style={{ color: "grey" }}>
    //           We'll check your video for potential copyright infringements on
    //           used sounds. If infringements are found, you can edit the video
    //           before posting.{" "}
    //           <a href="" style={{ textDecoration: "none", color: "#000" }}>
    //             Learn more
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <ProfileHeader />
      <UploadBanner />
    </div>
  );
};

export default Upload;
