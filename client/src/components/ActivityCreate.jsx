import React from 'react';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, NavLink} from 'react-router-dom';
import {postActivity, getCountries} from '../actions/index'

const validate = (input) => {
    let errors = {};
    if(input.name === '' ){
        errors.name = 'campo requerido';
    }
    else if(input.season === ''){
        errors.season = 'campo requerido'
    }
    else if(input.countries.length === 0){
        errors.countries = 'campo requerido'
    }
    return errors 
}

const ActivityCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] =  useState({})
    const allCountries = useSelector(state => state.countries)
    const [input, setInput] = useState({
        name: '',
        difficulty: 0,
        duration: 0,
        season: '',
        countries: [],
    })
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }
    const handleSelect = (e) => {
        setInput({
            ...input,
            countries:[...input.countries, e.target.value] 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        const validation = validate(input)
        if(Object.keys(validation).length === 0){
            dispatch(postActivity(input))
            alert('activity created')
            setInput({
                name: '',
                difficulty: 0,
                duration: 0,
                season: '',
                countries: [],
            })
            history.push('/home')
        }else{
            setErrors(validation)
        }
        
    }
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    return (
        
            <form onSubmit={e => handleSubmit(e)}>
                <NavLink to='/home/'>
                    <button>
                        Back
                    </button>
                </NavLink>
                <div>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={input.name}
                        onChange= {e => handleChange(e)}
                        placeholder='Nombre de la actividad..'
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label>Difficulty: </label>
                    <input
                        type="number"
                        name="difficulty"
                        onChange={e => handleChange(e)}
                        value={input.difficulty}
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
                        value={input.duration}
                        onChange={e => handleChange(e) }
                        min={1}
                        max={24}
                        placeholder="Between 1 and 24hs"
                    />
                    
                </div>
                <div>
                    <label>Season: </label>
                    <select name="season" onChange={e => handleChange(e)}>
                        <option value="">Select a station</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                    </select>
                    {errors.season && <p>{errors.season}</p>}
                </div>
                <div>
                    <p>Select countries:</p>
                    <p>
                        To select more than one option 
                        can click the options while holding down the key. CTRL
                    </p>
                
                    <select name="countries" onChange={e => handleSelect(e)} multiple>
                        {
                            allCountries?.map((element, index) => (
                                <option key={index} value={element.name}>{element.name}</option>
                            ))
                        }
                    </select>
                    {errors.countries && <p>{errors.countries}</p>}
                </div>
                <div>
                    <input type="submit" value='Create' />
                </div>
                
            </form>
        
    )
}

export default ActivityCreate
