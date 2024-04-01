import React from "react";
import "./MainContent.css";
import Grid from "@mui/material/Grid";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggestions/Suggestions";

export default function MainContent() {
  return (
    <div className="mainContent-container">
      
      <div className="main-content">
<<<<<<< HEAD
          <div className="statusBar">
=======
          <div className="status">
>>>>>>> ab4111138fc94f4a85dee606cfab0dced59e13d0
            <StatusBar />
          </div>

          <div className="mainpage">
            <MainPage />
          </div>
      </div>

        <div className="InfoSection-Suggestions">
          <InfoSection />
          <Suggestions />
        </div>
      
    </div>
  );
}
