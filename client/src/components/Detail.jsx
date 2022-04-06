import React from 'react';
import {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {getDetails} from '../actions/index'

const Detail = (props) => {
    //console.log('ESTO SON LAS PROPS: ', props)
    const dispatch = useDispatch()
    const id = props.match.params.id
    useEffect(() => {
        dispatch(getDetails(id))
    }, [dispatch, id])
    const countryDetail = useSelector(state => state.details)
    const activitiesDetail = countryDetail.activities
    
    return (
        <div>
            <div>
                <h1>{countryDetail.name}</h1>
                <img src={countryDetail.image} alt="img not found" />
                <h4>Code: {countryDetail.id}</h4>
                <h4>Capital: {countryDetail.capital}</h4>
                <h4>Subregion: {countryDetail.subregion}</h4>
                <h4>Area: {countryDetail.area}</h4>
                <h4>Population: {countryDetail.population}</h4>
            </div>
            <div>
              {
                  
                  activitiesDetail? activitiesDetail.map(element => (
                    <div key={element.id}>
                        <h4>{element.name.charAt(0).toUpperCase() + element.name.slice(1)}</h4>    
                        <p><span>Difficulty:</span> {element.difficulty}</p>    
                        <p><span>Duration:</span> {element.duration}</p>    
                        <p><span>Season:</span> {element.season}</p>    
                    </div>
                  )): <p>No hay nada</p>
              }
            </div>
            <NavLink to='/home/'>
                <button>
                    back
                </button>
            </NavLink>
        </div>
    )
}

export default Detail