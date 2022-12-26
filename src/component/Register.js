import React, { useState } from "react";
import "./register.css";
export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submit = () => {
    console.log(user);
  };

  return (
    <div style={{ height: "100vh", display: "flex", alignContent: "center" }}>
      <div className="register" style={{ margin: "auto" }}>
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
      
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Your Password"
          onChange={handleChange}
        ></input>
        
        <div className="button" onClick={submit}>
          Register
        </div>
      </div>
    </div>
  );
};
