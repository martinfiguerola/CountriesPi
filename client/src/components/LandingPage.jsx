import React from 'react'
import { NavLink } from 'react-router-dom';
import s from '../styles/LandingPage.module.css'
const LandingPage = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1>Country App</h1>
          <NavLink to='/home'>
            <button className={s.btn}>Acceder</button>
          </NavLink>
      </div>
       
    </div>
  )
}

export default LandingPage