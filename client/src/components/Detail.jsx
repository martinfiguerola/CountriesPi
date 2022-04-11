import React from 'react';
import {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'
import {getDetails} from '../actions/index'
// importo los estilos
import s from '../styles/Detail.module.css'

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
        <div className={s.container}>
            <NavLink to='/home/'>
                <button className={s.btn}>
                Back
                </button>
            </NavLink>

            <div className={s.countryDescription} >
                <figure>
                    <img src={countryDetail.image} alt="img not found" />
                </figure>
                <div className={s.countryBody}>
                    <div className={s.countryDetail}>
                        <h1>{countryDetail.name}</h1>
                        <p> <span>Code: </span>{countryDetail.id}</p>
                        <p> <span> Capital: </span>{countryDetail.capital}</p>
                        <p> <span>Subregion: </span>{countryDetail.subregion}</p>
                        <p> <span>Area: </span>{countryDetail.area}</p>
                        <p> <span>Population: </span>{countryDetail.population}</p>
                       <h4> <span>Activities: </span></h4>
                    </div>
                    <div className={s.containerActivities}>
                    
                        {
                        activitiesDetail?.length > 0 ? activitiesDetail.map(element => (
                            <div className={s.activitiesDetail} key={element.id}>
                                <p><span>Name:</span>{element.name.charAt(0).toUpperCase() + element.name.slice(1)}</p>    
                                <p><span>Difficulty:</span>{element.difficulty}</p>    
                                <p><span>Duration:</span>{element.duration}</p>    
                                <p><span>Season:</span> {element.season}</p>    
                            </div>
                        )): <span className={s.active} >Todavia no hay actividades</span>
                        }
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Detail