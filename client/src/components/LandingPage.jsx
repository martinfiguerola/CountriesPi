import React from 'react'
import { NavLink } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div>
        <h1>Bienvenidos a esta prueba</h1>
        <NavLink to='/home'>
            <button>Acceder</button>
        </NavLink>
    </div>
  )
}

export default LandingPage