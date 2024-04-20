import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Components/firebase";
import { useCreateUserAccount } from "./useCreateUserAccount";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const { createUserAccount } = useCreateUserAccount();

  const signUpAccount = async (name, userName, email, password) => {
    setIsLoading(false);

    try {
        //using firebase 
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      var userUID = userCredential.user.uid; //grabbing user UID from firebase 
      if (userCredential) {
        console.log("firebase sign UP works");
      }

      await createUserAccount(userUID, name, userName, email, password); //adding user account to the DB
      setIsLoading(false);
      setSuccess(true);

    } catch (error) {
      const jsonError = error.response.data.error;
      console.log("There was an error with sign In firebase:", error.message);
      setIsLoading(false);
      setSuccess(false);
      setError(jsonError);
    }
  };

  return {signUpAccount};
};
