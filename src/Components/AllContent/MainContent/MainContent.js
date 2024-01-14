import React from "react";
import "./MainContent.css";
import Grid from "@mui/material/Grid";
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggestions/Suggestions";

export default function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          grid 1
        </Grid>

        <Grid item xs={6}>
          <div>
            <div className="status">
              <StatusBar />
            </div>

            <div className="mainpage">
              <MainPage />
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <div className="InfoSection-Suggestions">
              <InfoSection />
              <Suggestions />
          </div>
        </Grid>

        <Grid item xs={2}>
          
        </Grid>
      </Grid>
    </div>
  );
}
