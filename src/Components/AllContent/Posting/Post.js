import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import { RxDotsHorizontal } from "react-icons/rx";
import pic from "../../../images/DSC09653.jpeg";
import love from "../../../images/love.svg";
import comment from "../../../images/comment.svg";
import share from "../../../images/share.svg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { PostAddRounded } from "@mui/icons-material";

export default function Post(props) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
      setText(e.target.value);
    };


  const [commentList, setCommentList] = useState([
    {
        "username": "testing",
        "commentId": "123",
        "timeStamp": "12232",
        "description": "fjadlfjdf hell"
    },
    {
        "username": "testing",
        "commentId": "123",
        "timeStamp": "12232",
        "description": "fjadlfjdf hell"
    }
  ]);
  const getComments = ()=> {
    
  }




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

      {/*Image */}
      <div>
        <img src={props.postImage} width="470px" />
      </div>

      {/*Analytics */}
      <div>
        <div>
          <img src={love} className="post_reactimage-heart" />
          <img src={comment} className="post_reactimage" />
          <img src={share} className="post_reactimage" />
        </div>

        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
          {props.likes} likes
        </div>

        <div style={{fontSize: "12px" }}>
          <span style={{ fontWeight: "bold" }}>{props.userName}</span>: {props.postDescription}
        </div>

      </div>

      {/*Comment Section */}
      <div>
        {
            commentList.map((comment, index) => ((
                <div className="post_comment">{comment.username}: {comment.description}</div>
            )))
        }
       
       <input
        type="text"
        value={text}
        onChange={handleChange}
        className="post_commentbox"
        placeholder="Add a comment..."
      />
      {text.length > 0 && (
        <span
          style={{ fontWeight: "bold", marginLeft: "7px", color: "#0095F6", fontSize: "12px" }}
        >
          Post
        </span>
      )}
      </div>
    </div>
  );
}
