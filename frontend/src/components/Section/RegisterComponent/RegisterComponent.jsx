import "./RegisterComponent.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../api/ApiAuth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setJwt();
  };

  const navigate = useNavigate();

  const setJwt = async () => {
    try {
      const usuario = {
        username: username,
        password: password,
      };

      await auth.registro(usuario).then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/login");
          alert(res.data.message);
        }
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <body id="register">
      <div className="bodylogin">
        <div>
          <img
            src="./img/Pokeball.png"
            alt="pokeball"
            className="pokeball-login"
          />
          <h1 className="tituloLogin">Pokedex</h1>
        </div>
        <h4>Registro</h4>
        <form>
          <p>Username</p>
          <input
            className="input1"
            type="text"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <p>Password</p>
          <input
            className="input2"
            type="password"
            name=""
            id=""
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>

        <div className="buttons">
          <button onClick={handleRegister} className="ingresar">
            Registrarse
          </button>
        </div>
      </div>
    </body>
  );
}

export default Register;
