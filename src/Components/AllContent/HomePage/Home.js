import React from "react";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import { Navigate, Link, useNavigate } from 'react-router-dom'
import {useAuth} from "../../../Context/AuthContext"



function Home() {

  const {userLoggedIn} = useAuth();


  return (
    <div className="home">
      {!userLoggedIn && (<Navigate to={'/login'} replace={true} />)}
      <div className="homepage">
        <div className="navColumn">
          <NavBar/>
        </div>

        <div className="mainColumn">
          <MainContent/>
        </div>
      </div>
    </div>
  );
}

export default Home;
