import "./NavBar-styles.css"
import logo from "/img/logo.png"
import React from 'react'

function NavBar() {
  return (
    <nav className="nav-bar">
      <div><img src={logo} alt="" className="logo"/></div>
      <ul className="items">
          <li><a href="">INICIO</a></li>
          <li><a href="">ETIQUETAS</a></li>
          <li><a href="">ETIQUETAS PERSONALIZADAS</a></li>
          <li><a href="">DONDE COMPRAR</a></li>
          <li><a href="">COMENTARIO</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;