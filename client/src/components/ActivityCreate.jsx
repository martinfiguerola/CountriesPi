import React from 'react';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postActivity, getCountries} from '../actions/index'

const ActivityCreate = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries)
    useEffect(() => {
        dispatch(getCountries())
    })
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder='Nombre de la actividad..'
                    />
                </div>
                <div>
                    <label>Difficulty: </label>
                    <input
                        type="number"
                        name="difficulty"
                        min={1}
                        max={5}
                        placeholder="Between 1 and 5hs"
                    />
                </div>
                <div>
                    <label>Duration(hs): </label>
                    <input
                        type="number"
                        name="duration"
                        min={1}
                        max={24}
                        placeholder="Between 1 and 24hs"
                    />
                </div>
                <div>
                    <label>Season: </label>
                    <select name="season">
                        <option value="">Select a station</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                    </select>
                </div>
                <div>
                    <p>Select countries:</p>
                    <p>
                        To select more than one option 
                        can click the options while holding down the key. CTRL
                    </p>
                
                    <select name="countries" multiple>
                        {
                            allCountries?.map((element, index) => (
                                <option key={index} value={element.name}>{element.name}</option>
                            ))
                        }
                    </select>
                </div>
                
            </form>
        </div>
    )
}

export default ActivityCreate
