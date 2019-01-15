import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'

import './app.scss'

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  )
}

export default App
