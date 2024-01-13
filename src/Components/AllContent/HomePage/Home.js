import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";


function Home() {
  return (
    <div className="home">
      <div className="homepage">
        <div className="navColumn">
          <NavBar />
        </div>

        <div className="mainColumn">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default Home;
