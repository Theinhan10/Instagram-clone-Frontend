import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import { RxDotsHorizontal } from "react-icons/rx";
import pic from "../../../images/DSC09653.jpeg";
import love from "../../../images/love.svg";
import comment from "../../../images/comment.svg";
import share from "../../../images/share.svg";
import pic2 from "../../../images/DSC09692.jpg";
import pic3 from "../../../images/DSC09422.jpg";
import vid from "../../../images/IMG_8256.MOV";

import Carousel from "./Carousel";

export default function Post(props) {
  const [images, setImages] = useState([pic, vid, pic2, pic3]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [commentList, setCommentList] = useState([
    {
      username: "testing",
      commentId: "123",
      timeStamp: "12232",
      description: "fjadlfjdf hell",
    },
    {
      username: "testing",
      commentId: "123",
      timeStamp: "12232",
      description: "fjadlfjdf hell",
    },
  ]);
  const getComments = () => {};

  return (
    <div className="post-container">
      {/*Header */}
      <div className="post-header">
        <Avatar className="post-image" src="" />
        <div className="post-username">{props.userName}</div>
        <div className="post-dot-option">
          {" "}
          <RxDotsHorizontal style={{ fontSize: "24px" }} />{" "}
        </div>
      </div>

      {/*Image---- add the sliding here
      
        <div className="max-w-lg"> 
          <Carousel>
            {props.postImage.map((s) => (
              <img src={s}/>
            ))}

          </Carousel>
        
        
        </div>  
              
        
        <div>
        <img src={props.postImage} width="470px" />
      </div>

      
      */}

      <div className="max-w-lg">
        <Carousel>
          {images.map((file, index) => {
            if (file.endsWith(".jpeg") || file.endsWith(".jpg")) {
              return <img key={index} src={file} alt="image" />;
            } else if (file.endsWith(".MOV") || file.endsWith(".mp4")) {
              return (
                <video key={index} controls>
                  <source src={file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              );
            } else {
              return null; // Skip unknown file types
            }
          })}
        </Carousel>
      </div>

      {/*Analytics */}
      <div>
        <div className="flex">
          <img src={love} className="post_reactimage-heart" />
          <img src={comment} className="post_reactimage" />
          <img src={share} className="post_reactimage" />
        </div>

        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
          {props.likes} likes
        </div>

        <div style={{ fontSize: "12px" }}>
          <span style={{ fontWeight: "bold" }}>{props.userName}</span>:{" "}
          {props.postDescription}
        </div>
      </div>

      {/*Comment Section */}
      <div>
        {commentList.map((comment, index) => (
          <div key={index} className="post_comment">
            {comment.username}: {comment.description}
          </div>
        ))}

        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="post_commentbox"
          placeholder="Add a comment..."
        />
        {text.length > 0 && (
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "7px",
              color: "#0095F6",
              fontSize: "12px",
            }}
          >
            Post
          </span>
        )}
      </div>
    </div>
  );
}
