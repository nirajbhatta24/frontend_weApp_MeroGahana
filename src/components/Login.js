import React, { useState } from "react";
import userService from "../services/userService";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const Navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleRegister=()=>{
    Navigate("/register");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.Login({ username, password }).then((res) => {
      window.localStorage.setItem("token", res.data.token);
      window.localStorage.setItem("id", res.data.id);
      Navigate("/home");
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <button type="submit" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Login;
