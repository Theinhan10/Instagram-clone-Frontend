import React from "react";

export default function SignIn() {
  return (
    <div>
      <input
        className="loginpage_text"
        type="text"
        placeholder="Phone Number, username, or email"
      />
      <input
        className="loginpage_text"
        placeholder="Password"
        type="password"
      />
      <button className="login_button">Log In</button>
    </div>
  );
}
