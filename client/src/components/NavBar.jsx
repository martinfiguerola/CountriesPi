import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllActivities } from '../actions';

const NavBar = ({handleSelect, handleSort, handleByActivity}) => {
    const allActivities = useSelector((state) => state.activities)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllActivities())
    },[dispatch])

    return (
        <div>
           <NavLink to='/activity'>
                Create
           </NavLink>
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
                    allActivities?.map( (activity, index) => (
                        <option key={index} value={activity.name}>{activity.name.charAt(0).toUpperCase() + activity.name.slice(1)}</option>
                    ))
                }
            </select>  
        </div>
    )
}

export default NavBar