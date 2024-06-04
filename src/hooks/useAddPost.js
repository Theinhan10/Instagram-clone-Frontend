import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAddPost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [successAddingPost, setSuccessAddingPost] = useState(false);

  const navigate = useNavigate();

  const addPost = (downloadURLs, userUniqueId, name, caption) => {
    setIsLoading(true);

    axios
      .post("http://localhost:8080/post", {
        userUID: userUniqueId,
        images: downloadURLs,
        timestamp: new Date().getTime(),
        likeCount: 0,
        userName: name,
        caption: caption
      })
      .then(function (response) {
        console.log("Successfully made a Post (pic)", response.data);
        //console.log(response.data);
        setIsLoading(false);
        setSuccessAddingPost(true);
      })
      .catch(function (error) {
        console.log("Error with Post pic in DB: " + error);
        setIsLoading(false);
        setSuccessAddingPost(false);
        setError(error);
      });
  };

  return { addPost, isLoading, error, successAddingPost };
};
