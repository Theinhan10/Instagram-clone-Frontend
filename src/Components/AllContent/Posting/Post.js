import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Post.css";
import { RxDotsHorizontal } from "react-icons/rx";
import pic from "../../../images/DSC09653.jpeg";
import love from "../../../images/love.svg";
import comment from "../../../images/comment.svg";
import share from "../../../images/share.svg";
import pic2 from "../../../images/DSC09692.jpg";
import pic3 from "../../../images/DSC09422.jpg";
import vid from "../../../images/IMG_8256.MOV";

import PostCarousel from "./PostCarousel";
import { useGetMetadata } from "../../../hooks/usePostFilesStorage";
import { useAddPost } from "../../../hooks/useAddPost";
import CustomCarousel from "./CustomCarousel";

export default function Post({ caption, id, userName, likes, images }) {
  //const [images, setImages] = useState([pic, vid, pic2, pic3]);
  const [text, setText] = useState("");

  const { getFileMetadata } = useGetMetadata();
  const { successAddingPost } = useAddPost();

  const [metadataUrls, setMetadataUrls] = useState([]);

  useEffect(() => {
    const fetchMetadata = async () => {
      const urlsWithMetadata = await Promise.all(
        images.map(async (url) => {
          const metadata = await getFileMetadata(url);
          return { url, metadata };
        })
      );
      setMetadataUrls(urlsWithMetadata);
    };

    fetchMetadata();
  }, [images]);

  // console.log(metadataUrls);

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
        <div className="post-username">{userName}</div>
        <div className="post-dot-option">
          {" "}
          <RxDotsHorizontal style={{ fontSize: "24px" }} />{" "}
        </div>
      </div>

      <div className="max-w-lg">
        <PostCarousel images={metadataUrls} />

        {/**<CustomCarousel images={metadataUrls} />*/}
      </div>

      {/*Analytics */}
      <div>
        <div className="flex">
          <img src={love} className="post_reactimage-heart" />
          <img src={comment} className="post_reactimage" />
          <img src={share} className="post_reactimage" />
        </div>

        <div style={{ fontWeight: "bold", fontSize: "12px" }}>
          {likes} likes
        </div>

        <div
          style={{
            fontSize: "12px",
            display: "flex",
            gap: "4px",
            height: "20px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{userName}:</span>
          <p>{caption}</p>
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
