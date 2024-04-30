import './Header.css'
import logo from './img/logoPropio.png'
function Header () {
  return (
    <header className="header">
      <div className="logo-container">
      <a href="http://localhost:5173/Home"><img src={logo} alt="" className='logo' /></a>
      </div>

      <div className="navegacion">
        <ul>
          <li><a href="http://localhost:5173/Home">Home</a></li>
          <li><a href="http://localhost:5173/Contaminacion">Contaminacion</a></li>
          <li><a href="http://localhost:5173/Donaciones">Donaciones</a></li>
          <li><a href="http://localhost:5173/">Login</a></li>
        </ul>
      </div>
    </header>

  )
}
export default Header
