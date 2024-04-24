import React, { useState } from "react";
import Post from "../Posting/Post";
import "./MainPage.css";
import pic from "../../../images/DSC09653.jpeg";
import testPic from "../../../images/post.jpg";

export default function MainPage() {
  const [images, setImages] = useState([pic, testPic, pic]);

  const [postList, setPostList] = useState([
    {
      id: "12",
      userName: "John",
      postImage: images,
      likes: "124",
      description: "I want this post",
    },
    {
      id: "12",
      userName: "John",
      postImage: testPic,
      likes: "124",
      description: "I want this post",
    },
    {
      id: "12",
      userName: "John",
      postImage: pic,
      likes: "124",
      description: "I want this post",
    },
  ]);

  //const getPost = () => {};

  return (
    <div className="mainpage-content">
      {postList.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          userName={post.userName}
          postDescription={post.description}
          postImage={post.postImage}
          likes={post.likes}
        />
      ))}
    </div>
  );
}
