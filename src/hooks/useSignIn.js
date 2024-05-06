import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase";
import { useGetAuthUser } from "./useGetAuthUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const { getAuthUser } = useGetAuthUser();

  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userUniqueId = userCredential.user.uid;
        //console.log(userCredential);
        if(userCredential){
          console.log("firebase login works");
        }

        await getAuthUser(userUniqueId);
        setIsLoading(false);
        setSuccess(true);
      } catch (error) {
        const jsonError = error.response.data.error;
        console.log("There was an error with sign In firebase:", error.message);
        setIsLoading(false);
        setSuccess(false);
        setError(jsonError);
        //Handle error appropriately
      }
  };

  return {signIn, isLoading, success};
}
