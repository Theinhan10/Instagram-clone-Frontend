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
          <div className="status">
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
