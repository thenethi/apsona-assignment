import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://apsona-assignment-ahi5.onrender.com/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.ok) {
      alert("Registration successful");
      history.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  const navigateToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>

        <button onClick={navigateToLogin}>Login with us</button>
      </form>
    </div>
  );
}

export default Register;
