import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://apsona-assignment-ahi5.onrender.com/api/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      Cookies.set("token", data.token);
      history.push("/");
    } else {
      alert("Login failed");
    }
  };

  const navigateToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button onClick={navigateToRegister}>Register with us</button>
      </form>
    </div>
  );
}

export default Login;
