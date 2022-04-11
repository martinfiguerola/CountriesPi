import React from 'react'
import Card from './Card'
import s from '../styles/Cards.module.css'

const Cards = ({filteredCountries}) => {
  return (
    <div className={s.cardsContainer}>
        {
            filteredCountries.length && 
            filteredCountries.map( (country) => {
                return (
                    <Card 
                        key={country.id}
                        id = {country.id}
                        name={country.name} 
                        image={country.image} 
                        continent={country.continent}
                    />
                )
              }) 
        }
    </div>
  )
}

export default Cards