import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Suggestions.css";
import pic from "../../../images/DSC09653.jpeg";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    {
      pic: pic,
      username: "thein",
    },
    {
      pic: pic,
      username: "Han",
    },
    {
      pic: pic,
      username: "thein",
    },
    {
        pic: pic,
        username: "thein",
      },
      {
        pic: pic,
        username: "thein",
      },
      {
        pic: pic,
        username: "thein",
      }     
  ]);

  return (
    <div>
      <div className="suggestions-container">
        <div className="suggestions-header">
          <div className="suggested-for-you-text">Suggested for you</div>
          <div className="see-all-text">See All</div>
        </div>

        <div className="suggestions-body">
          {suggestions.slice(0, 6).map((suggestion, index) => (
<<<<<<< HEAD
            <div key={index} className="suggestions-friend-content">
=======
            <div className="suggestions-friend-content">
>>>>>>> ab4111138fc94f4a85dee606cfab0dced59e13d0
              <Avatar src={suggestion.pic} className="suggestions-image" />
              <div className="suggestions-username">{suggestion.username}</div>
              <div className="suggest-follow">Follow</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
