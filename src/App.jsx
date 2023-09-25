import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Contaminacion from './Contaminacion/Contaminacion'
import Donaciones from './Donaciones/Donaciones'
import './App.css'

function App () {
  return (
    <>
      <h1 className='titulo'>BIENVENIDO A VIDA SANA</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contaminacion' element={<Contaminacion />} />
        <Route path='/donaciones' element={<Donaciones />} />
      </Routes>
    </>
  )
}

export default App
