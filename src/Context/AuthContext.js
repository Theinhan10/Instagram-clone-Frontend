import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../Components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useGetAuthUser } from "../hooks/useGetAuthUser";

// Create context
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// Provider component
export function AuthProvider({ children }) {
  const { getAuthUser } = useGetAuthUser();

  const [currentUser, setCurrentUser] = useState();
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    // Initialize the authentication state change listener,  when a user signs in, signs out, or their authentication token expires.
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []); // Empty dependency array ensures this effect only runs once when the component mounts

  /*
  useEffect(() => {
    if (localStorage.getItem("users") !== null) {
      const user = JSON.parse(localStorage.getItem("users"));
      console.log("this is the user in local storage", user);
      if (user) {
        setCurrentUser(user);
      }
    }
  }, []);
  */

  // Authentication state change listener callback
  async function initializeUser(user) {
    if (user) {


      const userUniqueId = user.uid;
      //console.log(userUniqueId);

      // Fetch user data from local storage after updating
      const currentUserLocalStorage = JSON.parse(localStorage.getItem("users"));


      if (currentUserLocalStorage) {
        setCurrentUser(currentUserLocalStorage);
        setUserLoggedIn(true);
        setSuccess(true);
      } else {
        setUserLoggedIn(false);
        console.log("No user authenticated");
      }
    } else {
      // User is not authenticated
      setCurrentUser(null);
      setUserLoggedIn(false);
      console.log("Current User is Not Authenticated");
    }

    setLoading(false);
  }

  // Function to sign out user
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        console.log("Logout was successful");
      })
      .catch((error) => console.log("Failure with signOut " + error));
  };

  // Context value
  const value = {
    userLoggedIn,
    currentUser,
    signOut: userSignOut,
    loading,
    success
  };

  // Provide the authentication context value to its children
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
