import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/Card.module.css'

const Card = ({name, image, continent, id}) => {
  return (
    <div key={id} className={s.cardContainer}>
      <Link to={'/home/' + id}>
          <img src={image} alt="img not found" width='350px' height='200px' />
        <div className={s.bodyContainer}>
          <h4>{name}</h4>
          <h5>Continent: {continent}</h5>
        </div>
      </Link>
        
    </div>
  )
}

export default Card