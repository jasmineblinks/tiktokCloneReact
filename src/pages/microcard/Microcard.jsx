import React from "react";
import profile2 from "../../images/goddy.jpg";
import profile from "../../images/pese.jpg";
import profile3 from "../../images/jus.jpg";
import profile4 from "../../images/godison.jpg";
import "./microcard.css";

function Microcard() {
  return (
    <div className="microcard">
      <div className="section ">
        <img className="img-profile" src={profile2} alt="profile" />
        <div>
          <h5 className="bold">Dabza</h5>
          <p>Dabibi tere</p>
        </div>
      </div>
      <div className="section ">
        <img className="img-profile" src={profile} alt="profile" />
        <div>
          <h5 className="bold">dabza</h5>
          <p>Dabibi tere</p>
        </div>
      </div>
      <div className="section ">
        <img className="img-profile" src={profile3} alt="profile" />
        <div>
          <h5 className="bold">Perry</h5>
          <p>Dabibi tere</p>
        </div>
      </div>
      <div className="section ">
        <img className="img-profile" src={profile4} alt="profile" />
        <div>
          <h5 className="bold">Mercy</h5>
          <p>Dabibi tere</p>
        </div>
      </div>
      <div>
        <h6 className="next">See all</h6>
      </div>
    </div>
  );
}

export default Microcard;
