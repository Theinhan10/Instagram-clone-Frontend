import React, { useState } from "react";

import "./Navbar.css";
import insta_logo from "../../images/logoinsta.png";
import UilEstate from '@iconscout/react-unicons/icons/uil-estate'
import UilSearch from '@iconscout/react-unicons/icons/uil-search'
import UilCompass from '@iconscout/react-unicons/icons/uil-compass'
import UilLocationArrow from '@iconscout/react-unicons/icons/uil-location-arrow'
import UilHeart from '@iconscout/react-unicons/icons/uil-heart'
import UilPlusCircle from '@iconscout/react-unicons/icons/uil-plus-circle'
import UilBars from '@iconscout/react-unicons/icons/uil-bars'
import Avatar from '@mui/material/Avatar';
import pic from "../../images/DSC09653.jpeg";


import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import love from "../../images/love.svg";



export default function NavBar() {
  return (
    <div className='leftNavigationBody'>
        <aside className="sidebar">
      <header className="sidebar-header">
        <img src={insta_logo} alt="InstagramLogo" className="logo-img" width="110px" />
        <i className="logo-icon uil uil-instagram"></i>
      </header>

      <nav>
        <button>
          <span>
            <i className='uil uil-searc'>
                {/**<UilEstate size="24"/>*/}
                <img src={home} />
            </i>
            <span>Home</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-search">
                <UilSearch className="icon"/>
            </i>
            <span>Search</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-compass">
                {/*<UilCompass size="24"/>*/}
                <img src={find} />
            </i>
            <span>Explore</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-location-arrow">
                {/*<UilLocationArrow size="24"/>*/}
                <img src={message} />
                <em>12</em>
            </i>
            <span>Messages</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-heart">
                {/*<UilHeart size="24"/>*/}
                <img src={love} />
              <em>3</em>
            </i>
            <span>Notifications</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-plus-circle">
               <UilPlusCircle className="icon"/>
            </i>
            <span>Create</span>
          </span>
        </button>

        <button>
          <span>
            <i>
                <Avatar className="icon" src={pic}  sx={{ width: 24, height: 24 }}/>
            </i>
            <span>Profile</span>
          </span>
        </button>

        <button>
          <span>
            <i className="uil uil-bars">
                <UilBars className="icon"/>
            </i>
            <span>More</span>
          </span>
        </button>
      </nav>
    </aside>


    </div>
    
  );
}
