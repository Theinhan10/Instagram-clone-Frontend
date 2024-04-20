import React from "react";
import { auth, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import axios from "axios";
import { useSignUp } from "../../../hooks/useSignUp";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {signUpAccount} = useSignUp();
  

  const signUp = async (e) => {
    e.preventDefault();

    await signUpAccount(name, userName, email, password);
    setEmail("");
    setUserName("");
    setName("");
    setPassword("");
    
  };

  return (
    <div>
      <form onSubmit={signUp}>
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
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          className="loginpage_text"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="login_button">Sign Up</button>
      </form>
    </div>
  );
}
