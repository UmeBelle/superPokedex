import "./LoginComponent.css";
import React from "react";

function Login() {
  return (
    <div className="bodylogin">
      <div>
        <img src="./img/Pokeball.png" alt="pokeball" className="pokeball-nav" />
        <h1>Pokedex</h1>
      </div>

      <div>
        {" "}
        <p>Username</p>
        <input className="input1" type="text" />{" "}
      </div>
      <div>
        <p>Password</p>
        <input className="input2" type="password" name="" id="" />
      </div>
      <div>
        <button className="ingresar">Ingresar</button>
      </div>
    </div>
  );
}

export default Login;