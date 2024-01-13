import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./StatusBar.css";
import statusImage from "../../../images/pp1.png";

export default function StatusBar() {
  const [data, setData] = useState([
    { username: "testing233", imageUrl: statusImage },
    { username: "hell33", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
    { username: "testing233", imageUrl: statusImage },
  ]);

  return (
    <div>
      <div className="statusbar_container">
        {data.map((item, index) => (
          <div className="status">
            <Avatar className="statusbar-status" src={item.imageUrl} />
            <div className="status-text">{item.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
