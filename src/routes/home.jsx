import React from 'react'
import Inicio from '../componentes/Inicio/Inicio'
import Nosotros from '../componentes/Nosotros/Nosotros'
import Etiquetas from '../componentes/Etiquetas/Etiquetas'
import Galeria from '../componentes/Galeria/Galeria'
import Contactanos from '../componentes/Contactanos/Contactanos'
function home() {
  return (
    <div>
        <Inicio/>
        <Nosotros/>
        <Etiquetas/>
        <Galeria/>
        <Contactanos/>
    </div>
  )
}

export default home