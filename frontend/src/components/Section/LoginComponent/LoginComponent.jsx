import "./LoginComponent.css";
import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const setJwt = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!respuesta.ok) {
        const error = await respuesta.json();
        throw new Error(error.message);
      }

      const auth = await respuesta.json();

      alert("xD");

      localStorage.setItem("token", auth.token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJwt();
  };

  return (
    <div className="bodylogin">
      <div>
        <img src="./img/Pokeball.png" alt="pokeball" className="pokeball-nav" />
        <h1>Pokedex</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input className="input1" type="text" required />

        <p>Password</p>
        <input className="input2" type="password" name="" id="" required />
      </form>

      <div>
        <button className="ingresar">Ingresar</button>
      </div>
    </div>
  );
}

export default Login;
