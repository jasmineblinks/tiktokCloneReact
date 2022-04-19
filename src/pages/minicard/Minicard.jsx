import React from "react";
import profile2 from "../../images/goddy.jpg";
import "./minicard.css";

function Minicard() {
  return (
    <div className="section-mini minicard">
      {/* <div className="section">
        <img className="user-profile" src={profile2} width={"100%"} />
        <div>
          <h3 className="bold">jamisi</h3>
          <p>Effiong Bassey</p>
        </div>
      </div> */}
      {/* {user.button_visible && (
        <div
          className={user.is_followed ? "followed-button" : "follow-button"}
          onClick={() => toggleFollow(user)}>
          {user.is_followed ? "Following" : "Follow"}
        </div>
      )} */}
      <h5>Follow</h5>
    </div>
  );
}

export default Minicard;
