import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../Components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

//create context
const AuthContext = React.createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

//create a privder component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  //const[isEmailUser, setIsEmailUser] = useState(false);
  console.log(currentUser);
  

  useEffect(() => {
    //when a user signs in, signs out, or their authentication token expires), this method is triggered.
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
        //console.log(user);
        
        //grabbing usuer data from local storage
        const currentUserLocalStorage = JSON.parse(localStorage.getItem("users"));
        //console.log(currentUserLocalStorage);

        if(currentUserLocalStorage !== null){
            setCurrentUser(currentUserLocalStorage);
        }
        console.log("User Authenticated");
        
        
      // check if provider is email and password login
      //const isEmail = user.providerData.some(
      //   (provider) => provider.providerId === "password"
      //);
      //setIsEmailUser(isEmail);

      // check if the auth provider is google or not
      //   const isGoogle = user.providerData.some(
      //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
      //   );
      //   setIsGoogleUser(isGoogle);

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      console.log("Current User is Not Authenicated");
    }

    setLoading(false);
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        //setLoading(false);
        console.log("Logout was successful");
        //window.location.reload();
      })
      .catch((error) => console.log("Failure with signOut " + error));
  };

  const value = {
    userLoggedIn,
    currentUser,
    signOut: userSignOut,
  };

 

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
