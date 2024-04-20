import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const useCreateUserAccount = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const createUserAccount = async (uid, name, userName, email, password) => {
    setIsLoading(true);

    axios
      .post("http://localhost:8080/users", {
        userUniqueId: uid,
        email: email,
        userName: userName,
        name: name,
        password: password,
        profileImage: "",
      })
      .then(function (response) {
        console.log("Successfully create user account" );
        console.log(response.data);
        localStorage.setItem("users", JSON.stringify(response.data));
        setIsLoading(false);
        setSuccess(true);
        navigate("/home");
      })
      .catch(function (error) {
        const jsonError = error.response.data.error;
        console.log("error with adding user in the DB" + error);
        setIsLoading(false);
        setSuccess(false);
        setError(jsonError);
      });
  };

  return { createUserAccount, isLoading, error, success };
};
