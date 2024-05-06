import React from "react";
import { useState } from "react";
import axios from "axios";
import { storage } from "../Components/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const usePostFilesStorage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const uploadFileToStorage = async (images) => {
    setIsLoading(true);
    try {
      const urls = [];

      for (const file of images) {
        const storageRef = ref(storage, `images/${file.name + v4()}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Wait for the upload to complete
        await uploadTask;

        // Retrieve the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        urls.push(downloadURL);
      }

      setIsLoading(false);
      setSuccess(true);
      //console.log('Download', urls);
      return urls; // Return the array of download URLs
    } catch (error) {
      console.error("Error uploading files:", error);
      setError(error);
      setIsLoading(false);
      return []; // Return an empty array in case of error
    }
  };

  return { error, isLoading, success, uploadFileToStorage };
};