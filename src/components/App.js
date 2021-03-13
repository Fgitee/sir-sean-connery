import React from 'react'
import { Router, Link } from 'react-static'
//
import Routes from 'react-static-routes'

import './app.css'

export default () => (
  <Router>
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
