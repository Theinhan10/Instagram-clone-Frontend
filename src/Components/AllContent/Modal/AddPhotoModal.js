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

export default function AddPhotoModal({ open, setOpen }) {
  //const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [progess, setProgess] = useState();
  const [finalAddPost, setFinalAddPost] = useState(false);
  const [images, setImages] = useState([]);

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
            <div className="createPost">
              <h1 className="CPname">Create new post</h1>
            </div>

            <div>
              <img src={images} width="500px" />
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

            <div>{progess}</div>
          </div>
        )}
      </Modal>
    </div>
  );
}
