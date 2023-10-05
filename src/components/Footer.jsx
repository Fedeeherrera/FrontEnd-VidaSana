import React from 'react';
import './Footer.css';


function MiFooter () {
  return (
    <footer className="piePagina">

  <div className="grupo1">

      <div className="box">
        <figure>
          <a href="#">
            <img src="./Logos/LogoVidaNatural.png" alt="LogoVidaNatural" />
          </a>
        </figure>
      </div>
    <div className="box">
    <h2>SOBRE NOSOTROS</h2>
    <p>oedvfndgoregojregoireogjkvjlkrgnlkrj</p>
    </div>

    <div className="box">
      <h2>SIGUENOS</h2>
      <div className="redesSociales">
        <a href=""><img src="./Logos/Facebook.png" alt="Fb" /></a>
        <a href="#"><img src="" alt="Ig" /></a> 
        <a href="#"><img src="" alt="Tw" /></a>
        <a href="#"><img src="" alt="Yb" /></a>
      </div>
    </div>
  </div>
  <div className="grupo2">
    <small>&copy; 2023 <b>Vida Natural</b> - Todos los Derechos Reservados</small>
  </div>

    </footer>
  )
}
export default MiFooter