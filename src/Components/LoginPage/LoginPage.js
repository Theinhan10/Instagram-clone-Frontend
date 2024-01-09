import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";
import logo from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import "./LoginPage.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default function LoginPage() {

  const [tryLogin, setTryLogin] = useState(true);
  
  const changeLogin =()=>{
    if(tryLogin){
      setTryLogin(false);
    }else{
      setTryLogin(true);
    }
  }


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="loginpage_main">
            <div>
              <img src={inst_image} width="454px" />
            </div>

            <div>
              <div className="loginpage_rightcomponent">
                <img src={inst_logo} className="loginpage_logo" />
                <div className="loginPage_signin">
                  
                  {tryLogin ? <SignIn/> : <SignUp/> }

                  <div className="login_ordiv">
                    <div className="login_dividor"></div>
                    <div className="login_or">OR</div>
                    <div className="login_dividor"></div>
                  </div>

                  <div className="login_fb">
                    <img
                      src={logo}
                      width="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Log in with Facebook
                  </div>

                  <div className="login_forgt">Forgot passsword?</div>
                </div>
              </div>

              <div className="loginpage_signupoption">

                {tryLogin ? <div className="loginPage_signin">
                  Don't have an account?{" "}
                  <span onClick={changeLogin} style={{ fontWeight: "bold", color: "#0395F6", cursor: "pointer" }}>
                    Sign Up
                  </span>
                </div> : <div className="loginPage_signup">
                  Have an account?{" "}
                  <span onClick={changeLogin}  style={{ fontWeight: "bold", color: "#0395F6", cursor: "pointer" }}>
                    Log In
                  </span>
                </div> }
                

                
              </div>

              <div className="loginPage_downloadSection">
                <div>
                  Get the app.
                </div>

                <div className="loginPage_option">
                  <img className="loginPage_dwing" src={appstore} width="136px"/>
                  <img className="loginPage_dwing" src={playstore} width="136px" />
                </div>


              </div>


            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}
