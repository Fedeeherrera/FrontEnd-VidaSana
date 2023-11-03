import React, { useState } from "react";
import './login.css'

const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuthAction = () => {
    if (isRegistering) {
      alert("Registro exitoso");
    } else {
      alert("Inicio de sesión exitoso");
      setLoggedIn(true);
    }
  };

  return (
    <div>
      
      <h2>{isRegistering ? "Registro" : "Inicio de sesión"}</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuthAction}>
        {isRegistering ? "Registrarse" : "Iniciar sesión"}
      </button>
      <p>
        {isRegistering
          ? "¿Ya tienes una cuenta? Inicia sesión."
          : "¿No tienes una cuenta? Regístrate."}
      </p>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Iniciar sesión" : "Registrarse"}
      </button>
    </div>
  );
};

export default Login;

