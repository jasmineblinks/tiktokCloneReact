import React from "react";
import Microcard from "../microcard/Microcard";
import videot from "../../images/videot.svg";
import "./followers.css";

function Followers() {
  return (
    <div className="followers-column">
      <div className="followers-section">
        <div className="home" />
        <h4 className="bold-content red">For You</h4>
      </div>
      <div className="followers-section">
        <div className="following" />
        <h4>Following</h4>
      </div>
      <div className="followers-section">
        <div className="live">
          <img src={videot} alt="logo" />
        </div>
        <h4>Live</h4>
      </div>
      <hr />
      <h5 className="suggest-account">Suggested accounts</h5>
      {/* {users &&
              users.map((user, index) => */}

      <Microcard />
      {/* )} */}
      <hr />
    </div>
  );
}

export default Followers;
