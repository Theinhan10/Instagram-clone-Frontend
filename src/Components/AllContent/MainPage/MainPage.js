import React, { useEffect, useState } from "react";
import Post from "../Posting/Post";
import "./MainPage.css";
import pic from "../../../images/DSC09653.jpeg";
import testPic from "../../../images/post.jpg";
import { useGetPost } from "../../../hooks/useGetPost";
import { usePostContext } from "../../../Context/PostContext";
import { useAddPost } from "../../../hooks/useAddPost";

export default function MainPage() {
  const [images, setImages] = useState([pic, testPic, pic]);

  const {getAllPost} = useGetPost();
  const { successAddingPost} = useAddPost();
  const { posts, isLoading, error, fetchPosts } = usePostContext();


  //fetching all of the posts in the database
  useEffect(() =>{
    getAllPost();
    console.log("normal useeffects");
  },[])

  

  

  //console.log("post", posts);



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

  const files = images.map(url => {
    // Extract filename from the URL
    const filename = url.substring(url.lastIndexOf('/') + 1);
  
    // Create an object with the name property set to the filename
    return { name: filename };
  });

  return (
    <div className="mainpage-content">
      {posts.map((post, index) => (
        <Post
          key={index}
          id={post.postId}
          userName={post.userName}
          caption={post.caption}
          images={post.images}
          likes={post.likeCount}
        />
      ))}
    </div>
  );
}
