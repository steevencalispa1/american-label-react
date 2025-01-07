import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar'
import Home from './routes/home'
import EtiPersonalizadas from './routes/EtiPersonalizadas'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/etiquetas-personalizadas' element={<EtiPersonalizadas/ >}/>
    </Routes>
    </div>
  )
}
export default App
