import React from "react";
import { auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  //const [uid, setUID] = useState("");

  

  const signUp = async (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(userCredential);
        console.log(user);

        

        axios.post("http://localhost:8080/users", {
          userUniqueId: user.uid,
          //email: email,
          userName: userName,
          name: name,
          password: password,
          profileImage: ""
        })
        .then(function (response) {
          console.log("Successfully sign up");
          console.log(response.data);
          localStorage.setItem("users", JSON.stringify(response.data));
          setEmail("");
         // setUID("");
          setUserName("");
          setName("");
          setPassword("");
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
          console.log("error with signup in the DB");
        });


        
      })
      .catch((error) => {
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log(error.code);
        console.log(error.message);
        console.log("there is error with signUp firbase" + error.code);
        // ..
      });
  };

  

  return (
    <div>
      <form onSubmit={signUp}>
      <input
        className="loginpage_text"
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />

      <input
        className="loginpage_text"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="login_button" >
        Sign Up
      </button>
      </form>
      
      
    </div>
  );
}
