import React from "react";
import Followers from "../followers/Followers";
import Card from "../Card/Card";
import MiniCard from "../minicard/Minicard";
import "./home.css";
import Header from "../../Components/header/Header";

function Home() {
  return (
    <div className="container">
      {/* <Header /> */}
      <Followers />
      <div className="feed">
        <Card />
      </div>
      <div className="suggested-box">
        <div className="section">
          <div className="suggested">
            {/* <h2 className="bold">Suggested accounts</h2>
            <div className="break" /> */}

            <MiniCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
