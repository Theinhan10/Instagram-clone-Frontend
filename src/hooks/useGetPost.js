import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { usePostContext } from "../Context/PostContext";

export const useGetPost = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const { dispatch } = usePostContext();

  const getAllPost = async () => {
    setIsLoading(true);

    await axios
      .get(`http://localhost:8080/post/allPosts`)
      .then(function (response) {
        //console.log("Successfully get all posts");
        //console.log(response.data);
        dispatch({ type: 'SET_POSTS', payload: response.data });
        setIsLoading(false);
        setSuccess(true);
      })
      .catch(function (error) {
        const jsonError = error.response.data.error;
        console.log("error with getting user in the DB" + error);
        setIsLoading(false);
        setSuccess(false);
        setError(jsonError);
      });
  };

  return {
    getAllPost,
    isLoading,
    success,
  };
};
