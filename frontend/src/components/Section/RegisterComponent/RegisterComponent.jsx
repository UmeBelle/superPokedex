import "./RegisterComponent.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../api/ApiAuth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

      setLoading(true);
      await auth.registro(usuario).then((res) => {
        if (res.data.success) {
          localStorage.removeItem("token");
          localStorage.setItem("token", res.data.token);
          navigate("/login");
          setLoading(false);
          alert(res.data.message);
        }
        
      });
    } catch (error) {
      setLoading(false);
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
        <h4>Sign-up</h4>
        <form className="form-reg">
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

        <div className="div-ingresar">
          <button onClick={handleRegister} className="ingresar">
            Submit
          </button>
         
        </div>
        <div> {loading && (
            <>
              {" "}
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </>
          )}</div>
          <div className="signup">
        <p>
          Already have an account?{" "}
          <a className="linklogin" href="/login">
            {" "}
            Login
          </a>
        </p>
        </div>
      </div>
    </body>
  );
}

export default Register;
