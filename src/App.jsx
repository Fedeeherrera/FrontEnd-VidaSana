import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home/Home'
import Login from './Login/Login'
import Contaminacion from './Contaminacion/Contaminacion'
import Donaciones from './Donaciones/Donaciones'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path='/Login' className="page-container" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contaminacion' element={<Contaminacion />} />
        <Route path='/donaciones' element={<Donaciones />} />
      </Routes>
=======
    
       <BrowserRouter>
       <Header />

        <Routes>

          <Route path='/Home' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Contaminacion' element={<Contaminacion />} />
          <Route path='/Donaciones' element={<Donaciones />} />
          
        </Routes>


        <Footer/>
      </BrowserRouter> 
>>>>>>> origin
    </>
  )
}

export default App
