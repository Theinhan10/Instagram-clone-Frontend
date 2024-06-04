import React from "react";
import { useState } from "react";
import axios from "axios";
import { storage } from "../Components/firebase";
import { ref, uploadBytesResumable, getDownloadURL, getMetadata  } from "firebase/storage";
import { v4 } from "uuid";


//uploading files to the firebase storage
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

//getting the file into from firebase storage
export const useGetMetadata = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState(null);

  const getFileMetadata = async (path) => {
    setIsLoading(true);
    try {
      const fileRef = ref(storage, path);
      const metadata = await getMetadata(fileRef);
      setMetadata(metadata);
      setIsLoading(false);
      return metadata;
    } catch (error) {
      console.error("Error fetching file metadata:", error);
      setError(error);
      setIsLoading(false);
      return null;
    }
  };

  return { error, isLoading, metadata, getFileMetadata };
};