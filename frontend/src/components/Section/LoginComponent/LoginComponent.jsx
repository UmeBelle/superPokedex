import "./LoginComponent.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../api/ApiAuth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const setJwt = async () => {
    try {
      const usuario = {
        username: username,
        password: password,
      };

      await auth.login(usuario).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/pokedex");
        }
      });
    } catch (error) {
      alert(error.response.data.message);
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
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="input1"
          type="text"
          required
        />

        <p>Password</p>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input2"
          type="password"
          name=""
          id=""
          required
        />
      </form>

      <div>
        <button onClick={handleSubmit} className="ingresar">
          Ingresar
        </button>
      </div>
    </div>
  );
}

export default Login;
