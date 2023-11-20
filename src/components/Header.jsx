//import { NavLink } from 'react-router-dom';
import './Header.css'
import React from 'react'
function Header () {
  return (
  <>
  <div className="back">
    <div className="menu-contenedor">
    <a href="#" className='logo'><img src="./src/components/img/logoPropio.png" alt="LogoVidaNatural" /></a>
    <div className="menuNav">
      <ul>
      <li><a href="http://localhost:5173/Home">Home</a></li>
      <li><a href="http://localhost:5173/Contaminacion">Contaminacion</a></li>
      <li><a href="http://localhost:5173/Donaciones">Donaciones</a></li>
      <li><a href="http://localhost:5173/Login">Login</a></li>
      </ul>
    </div>

    </div>
  </div>
  </>

  )
}
export default Header


