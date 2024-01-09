import React from "react";

export default function SignUp() {
  return (
    <div>
      <input
        className="loginpage_text"
        type="text"
        placeholder="Mobile Number or email"
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="loginpage_text"
        type="text"
        placeholder="Username"
      />
      
      <input
        className="loginpage_text"
        placeholder="Password"
        type="password"
      />
      <button className="login_button">Sign Up</button>
    </div>
  );
}
