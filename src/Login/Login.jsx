import React from "react";
import './Login.css'
import { useState } from 'react';

function Login ({setUser}) {
  const [username, setUsername] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)



  const handleSubmit = (e) =>{
    e.preventDefault()

      if(username === "" || correo === "" || password === "" ){
        setError(true)
        return 
      }

      setError(false)
      setUser([username, correo, password])
  }

  return (
<div className="container">
        <form onSubmit={handleSubmit}>

      
        <div className="form">
        <h2>Login Form</h2>
          <div className="campo">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="campo">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" value={correo} onChange={e => setCorreo(e.target.value)}/>
          </div>
          <div className="campo">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className="button"  >Submit</button>
        {error && <p>Todos los campos son obligatorios</p>}
        </div>
        <p className="text"><small>&copy; 2023 <b>Vida Natural</b></small></p>
        </form>
      </div>
          


     
  )
}

export default Login
