import './Header.css'
import React from 'react'
function MiHeader () {
  return (
    <div className="header">
      <div className="container">
        <a href="" className="logo"><img src="./Logos/LogoVidaNatural.png" alt="" />Vida Natural</a>
      </div>

      <div className="navegacion">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="http://localhost:5173/Contaminacion">Contaminacion</a></li>
          <li><a href="http://localhost:5173/Donaciones">Donaciones</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
        </ul>
      </div>
    </div>

  )
}
export default MiHeader
