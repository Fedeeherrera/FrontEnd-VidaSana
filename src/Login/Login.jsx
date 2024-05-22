import React from "react";
import MiHeader from "../components/Header";
import './Login.css';
function Login () {
  return (
    <div className="login">

   
        <div className="containerLogin">
          <div className="tituloForm">
              <div className="text">Sign Up</div>
              <div className="underline"></div>
          </div>
            
            <div className="inputs">
              <div className="input">
                <img src="./src/Login/user.png" alt="" className="imgLogin"/>
                <input type="text" placeholder="Nombre y Apellido"/>
              </div>
            </div>

            <div className="inputs">
              <div className="input">
              <img src="./src/Login/email.png" alt="" className="imgLogin" />
                
                <input type="email" placeholder="Ingrese Email"/>
              </div>
            </div>

            <div className="inputs">
              <div className="input">
              <img src="./src/Login/password.png" alt="" className="imgLogin"/>
                <input type="password" placeholder="Ingrese Contraseña" />
              </div>
            </div>
            <div className="submit-container">
              <div className="submit-btn">Sign Up</div>
              <div className="submit-btn">Login</div>
            </div>
        </div>
    </div>
  )
}

export default Login


