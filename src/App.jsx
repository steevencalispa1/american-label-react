import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Inicio from './componentes/Inicio/Inicio'
import Nosotros from './componentes/Nosotros/Nosotros'
import Etiquetas from './componentes/Etiquetas/Etiquetas'
function App() {
  return (
    <>
      <div className = "App">
        <NavBar/>
        <Inicio/>
        <Nosotros/>
        <Etiquetas/>
      </div>
    </>
  )
}

export default App
