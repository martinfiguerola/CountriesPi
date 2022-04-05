import React from 'react'

const Card = ({name, image, continent}) => {
  return (
    <div>
        <img src={image} alt="img not found" width='200px' height='250px' />
        <p>{name}</p>
        <p>{continent}</p>
    </div>
  )
}

export default Card