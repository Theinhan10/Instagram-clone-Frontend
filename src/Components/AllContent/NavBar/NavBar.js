import React, { useState } from "react";

import "./Navbar.css";
import insta_logo from "../../../images/logoinsta.png";
import UilEstate from "@iconscout/react-unicons/icons/uil-estate";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import UilCompass from "@iconscout/react-unicons/icons/uil-compass";
import UilLocationArrow from "@iconscout/react-unicons/icons/uil-location-arrow";
import UilHeart from "@iconscout/react-unicons/icons/uil-heart";
import UilPlusCircle from "@iconscout/react-unicons/icons/uil-plus-circle";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import Avatar from "@mui/material/Avatar";
import pic from "../../../images/DSC09653.jpeg";

import home from "../../../images/home.svg";
import message from "../../../images/message.svg";
import find from "../../../images/find.svg";
import love from "../../../images/love.svg";
import addPic from "../../../images/kisspng.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import axios from "axios";

import { storage } from "../../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4} from "uuid";

export default function NavBar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 750,
    height: "80%",
    bgcolor: "background.paper",
    border: "1px #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "20px",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  const upload = async (e)=>{ // Define an asynchronous function named upload that takes an event e as a parameter
    const image = e.target.files[0]; // Retrieve the first selected file from the event's target files
    // Check if an image file was selected
    if (!image) { 
      console.log("No image selected."); // Log a message to the console if no image was selected
      return; // Return early from the function
    }
  
    // Create a reference to the storage location where the image will be stored
    const storageRef = ref(storage, `images/${image.name + v4()}`);
    
    // Initiate an upload task to upload the image file to the storage reference
    const uploadTask = uploadBytesResumable(storageRef, image);
  
    // Set up callbacks for various upload states
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Progress callback (not implemented)
      },
      (error)=>{
        console.log("Upload failed!", error); // Log an error message if the upload fails
      },
      ()=>{
        // Upon successful upload, retrieve the download URL for the uploaded file
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL); // Log the download URL to the console

          axios.post("http://localhost:8080/post", {
            userId: JSON.parse(localStorage.getItem("users")).uid, //need to decide to change it to userId in Db or use uid!
            path: downloadURL,
            timestamp: new Date().getTime(),
            likeCount: 0
        })
        .then(function (response) {
          console.log("Successfully made a Post (pic)");
        })
        .catch(function (error) {
          //console.log(error);
          console.log("error with Post pic in DB " + error);
        });


        });
      }
    );
  }





  return (
    <div className="leftNavigationBody">
      <aside className="sidebar">
        <header className="sidebar-header">
          <img
            src={insta_logo}
            alt="InstagramLogo"
            className="logo-img"
            width="110px"
          />
          <i className="logo-icon uil uil-instagram"></i>
        </header>

        <nav>
          <button>
            <span>
              <i className="uil uil-searc">
                {/**<UilEstate size="24"/>*/}
                <img src={home} />
              </i>
              <span>Home</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-search">
                <UilSearch className="icon" />
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
            <span onClick={handleOpen}>
              <i className="uil uil-plus-circle">
                <UilPlusCircle className="icon" />
              </i>
              <span>Create</span>
            </span>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className="createPostModal">
                  <div className="createPost">
                    <h1 className="CPname">Create new post</h1>
                  </div>

                  <div className="addPost">
                    <img
                      className="mainpage__uploadicon"
                      src={addPic}
                      width="100px"
                    />
                    <label className="label">Add Your Photo and Video Here</label>

                    <button
                      onClick={() =>
                        document.getElementById("file-upload").click()
                      }
                    >
                      Select from computer
                    </button>
                    <input
                      onChange={upload}
                      id="file-upload"
                      type="file"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </Modal>
            </div>
          </button>

          <button>
            <span>
              <i>
                <Avatar
                  className="icon"
                  src={pic}
                  sx={{ width: 24, height: 24 }}
                />
              </i>
              <span>Profile</span>
            </span>
          </button>

          <button>
            <span>
              <i className="uil uil-bars">
                <UilBars className="icon" />
              </i>
              <span>More</span>
            </span>
          </button>
        </nav>
      </aside>
    </div>
  );
}
