import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.scss'

function App() {
  return (
    <Root>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#inicio">¿Que hacemos?</a></li>
          <li><a href="#inicio">¿Quienes somos?</a></li>
          <li><a href="#inicio">Contacto</a></li>
        </ul>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
