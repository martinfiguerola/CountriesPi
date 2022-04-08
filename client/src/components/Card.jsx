import React from 'react';
import s from '../styles/Card.module.css'

const Card = ({name, image, continent}) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.bodyContainer}>
        <figure>
          <img src={image} alt="img not found" width='200px' height='250px' />
        </figure>
        <p>{name}</p>
        <p>Continent: {continent}</p>
      </div>
    </div>
  )
}

export default Card