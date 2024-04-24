import React, { useRef } from "react";
import Modal from "@mui/material/Modal";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import "./Addphotomodal.css";
import addPic from "../../../images/kisspng.png";
import { useState } from "react";
import CompletePostModal from "../Modal/CompletePostModal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from '@mui/material'

export default function AddPhotoModal({ open, setOpen }) {
  //const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [progess, setProgess] = useState();
  const [finalAddPost, setFinalAddPost] = useState(false);
  const [images, setImages] = useState([]);

  const [caption, setCaptions] = useState();

  const upload = async (e) => {
    // Define an asynchronous function named upload that takes an event e as a parameter
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
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress callback (not implemented)
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgess(progress);
      },
      (error) => {
        console.log("Upload failed!", error); // Log an error message if the upload fails
      },
      () => {
        // Upon successful upload, retrieve the download URL for the uploaded file
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //console.log("File available at", downloadURL); // Log the download URL to the console
          //setPostpicture(downloadURL);
          /** 
          axios
            .post("http://localhost:8080/post", {
              userUID: JSON.parse(localStorage.getItem("users")).userUniqueId, //need to decide to change it to userId in Db or use uid!
              path: downloadURL,
              timestamp: new Date().getTime(),
              likeCount: 0,
              userName: JSON.parse(localStorage.getItem("users")).userName,
            })
            .then(function (response) {
              console.log("Successfully made a Post (pic)");
            })
            .catch(function (error) {
              //console.log(error);
              console.log("error with Post pic in DB " + error);
            });
            **/
        });
      }
    );
  };

  //when user select the pic in their file or computer
  //we want to save the picture
  const handleFileChange = (event) => {
    const files = event.target.files; // Get the selected files from the event
    setImages((prevFiles) => [...prevFiles, ...Array.from(files)]); // Append the selected files to the existing files
    console.log(files);
  };

  const inputRef = useRef();
  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = (index) => {
    const updatedFiles = [...images];
    updatedFiles.splice(index, 1); // Remove the file at the specified index
    setImages(updatedFiles); // Update the selectedFiles state
  };

  // Function to truncate the file name if it exceeds a certain length
  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length > maxLength) {
      return fileName.substring(0, maxLength) + "...";
    }
    return fileName;
  };

  //clicking next after selecting pic or video file
  const handleNext = () => {
    //have to make sure it can only go next if image exists.
    if (!images) {
      return;
    }
    setFinalAddPost(true);
  };

  const handleBack = () => {
    setFinalAddPost(false);
  };

  //This for finalAddPost section
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {finalAddPost ? (
          /**<CompletePostModal />*/
          <div className="createPostModal">
            <div className="sharePost">
              <h1 className="CParrow">
                <ArrowBackIcon style={{ fontSize: 28 }} onClick={handleBack} />
              </h1>
              <h1 className="CPname">Create new post</h1>
              <h1 className="share">Share</h1>
            </div>

            <div className="imagesAndCaption">
              <div className="image">
                <div className="overflow-hidden relative">
                  <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                  >
                    {images.map((file, index) => {
                      if (
                        file.name.endsWith(".jpeg") ||
                        file.name.endsWith(".jpg") ||
                        file.name.endsWith(".png")
                      ) {
                        // If the file is an image with JPEG or JPG extension
                        return (
                          <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`Image ${index}`}
                          />
                        );
                      } else if (
                        file.name.endsWith(".MOV") ||
                        file.name.endsWith(".mp4")
                      ) {
                        // If the file is a video with MOV or MP4 extension
                        return (
                          <video key={index} controls autoPlay>
                            <source
                              src={URL.createObjectURL(file)}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        );
                      } else {
                        return null; // Skip unknown file types
                      }
                    })}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between p-3">
                    <button
                      onClick={prev}
                      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                      <ChevronLeft style={{ fontSize: 30 }} />
                    </button>
                    <button
                      onClick={next}
                      className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                    >
                      <ChevronRight style={{ fontSize: 30 }} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                      {images.map((_, i) => (
                        <div
                          key={i} // Add a unique key prop based on the index i
                          className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="caption">
                <div className="avatar_container">
                  <Avatar src={addPic} style={{ width: "32px", height: "32px" }} />
                  <div className="avatarName_container">
                    <div className="info-username">UserName</div>
                  </div>
                </div>
                <textarea placeholder="Write a caption..." required value={caption} />
              </div>
            </div>
          </div>
        ) : (
          <div className="createPostModal">
            <div className="createPost">
              <h1 className="CPname">Create new post</h1>
              {images.length > 0 && (
                <h1 className="CParrow">
                  <ArrowRightAltIcon
                    style={{ fontSize: 32 }}
                    onClick={handleNext}
                  />
                </h1>
              )}
            </div>

            <div className="addPost">
              <img
                className="mainpage__uploadicon"
                src={addPic}
                width="100px"
              />
              <label className="label">Add Your Photo and Video Here</label>

              <button
                className="selectFromComputer-button"
                onClick={onChooseFile}
              >
                Select from computer
              </button>
              <input
                onChange={handleFileChange}
                ref={inputRef}
                id="file-upload"
                type="file"
                accept="image/*, video/*" /* Accept both image and video files */
                multiple /* Allow multiple file selection */
                style={{ display: "none" }}
              />

              {images.map((image, index) => (
                <div className="selected-file" key={index}>
                  <p>{truncateFileName(image.name, 15)}</p>

                  <button
                    className="delete-selectedFile"
                    onClick={() => removeFile(index)}
                  >
                    <span className="delete">
                      <DeleteOutlineIcon />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
