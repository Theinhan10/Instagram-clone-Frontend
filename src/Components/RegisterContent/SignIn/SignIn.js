import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../../firebase";
import axios from "axios";
import { useGetAuthUser } from "../../../hooks/useGetAuthUser";
import { useSignIn } from "../../../hooks/useSignIn";

export default function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  //const {getAuthUser} = useGetAuthUser();
  const {signIn} = useSignIn();

  const logIn = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div>
      <form onSubmit={logIn}>
      <input
        className="loginpage_text"
        type="text"
        placeholder="Phone Number, username, or email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="loginpage_text"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login_button">Log In</button>
      </form>
    </div>
    
  );
}
