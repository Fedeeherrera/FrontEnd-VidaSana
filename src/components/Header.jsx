import { Link } from 'react-router-dom'
import logo from './img/logoPropio.png'
import './Header.css'
function Header () {
  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/Home"><img src={logo} alt="Logo" className='logo header_a' /></Link>
      </div>

      <div className="navegacion">
        <ul>
          <li><Link className='header_a' to="/Home">Home</Link></li>
          <li><Link className='header_a' to="/Contaminacion">Contaminacion</Link></li>
          <li><Link className='header_a' to="/Donaciones">Donaciones</Link></li>
          <li><Link className='header_a' to="/">Login</Link></li>
        </ul>
      </div>
    </header>

  )
}
export default Header
