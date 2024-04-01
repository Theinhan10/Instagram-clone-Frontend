import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useGetAuthUser = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  /*
  // whenever the user clicks the submit button, we should navigate to the homepage with a nav bar that is for the logged in user
  useEffect(() => {
    // if the signup is successful then we go to the next page
    if (success) {
      console.log("There was no error and we successfully signed in!!!");
      navigate("/"); // route to the homepage if the login is successful
    }
  }, [success, navigate]);

  * */

  //getting user data with get request. storaging it in the local storage
  const getAuthUser = async (userUniqueId) => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8080/users/userUniqueId/${userUniqueId}`)
      .then(function (response) {
        console.log("Successfully sign up");
        //console.log(response.data);
        localStorage.setItem("users", JSON.stringify(response.data));
        //window.location.reload();
        setIsLoading(false);
        setSuccess(true);
        navigate("/home");
      })
      .catch(function (error) {
        const jsonError = error.response.data.error;
        console.log("error with signup in the DB" + error);
        setIsLoading(false);
        setSuccess(false);
        setError(jsonError);
      });
  };

  return {getAuthUser, isLoading, error, success};
};
