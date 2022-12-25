import axios from "axios";
import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
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
    axios.post("http://localhost:5000/admin/login", {
        name: user.name,
        password: user.password
    }).then(response => {
        console.log(response);
    })
  }

  return (
    <div style={{ height: "100vh", display: "flex", alignContent: "center" }}>
      <div className="login" style={{ margin: "auto" }}>
        {console.log(user)}
        <h1>Login</h1>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your Username"
        ></input>
        <input
          type="placeholder"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        ></input>
        <div className="button" onClick={submit}>Login</div>
      </div>
    </div>
  );
};

export default Login;
