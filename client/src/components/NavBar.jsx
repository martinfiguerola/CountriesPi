import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllActivities } from '../actions';

const NavBar = ({handleSelect, handleSort, handleByActivity}) => {
    const dispatch = useDispatch();
    const allActivities = useSelector((state) => state.activities)
    useEffect(() => {
        dispatch(getAllActivities())
    },[dispatch])
   
   
    return (
        <div>
            <h1>Countries Page</h1>
           
            <select defaultValue='Sort by:' onChange={e => handleSort(e)}>
                <option>Sort by:</option>
                <option value='asc'>A-Z</option> 
                <option value='desc'>Z-A</option>
                <option value='min'>Population(asc)</option>
                <option value='max'>Population(desc)</option>
            </select>

            <select defaultValue='Continent' onChange={ (e) => handleSelect(e)} >
                <option disabled={true}>Continent</option>
                <option value='Default'>Default-All</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
            </select>

            <select  defaultValue='Sort Activity' onChange={e => handleByActivity(e)} >
                <option>Sort Activity</option>
                {
                    allActivities?.length > 0 &&
                    allActivities?.map(el => (
                        <option key={el.id} value={el.name}>{el.name.charAt(0).toUpperCase() + el.name.slice(1)}</option>
                    ))
                }
            </select>  
            <NavLink to='/activity'>
                <button type="button">
                    Create Activity
                </button>
           </NavLink>
        </div>
    )
}

export default NavBar