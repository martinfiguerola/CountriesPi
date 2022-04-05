import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../actions';

const SearchBar = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: ''
    })
    const handleChange = (e) => {
        e.preventDefault(e)
        setInput({
            name: e.target.value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getNameCountries(input.name))
        setInput({
            name: ''
        })
    }
    return (
        <div>
            <input 
                type="text"
                value={input.name}
                placeholder='Buscar..'
                onChange={e => handleChange(e)}
            />
            <button onClick={e => handleClick(e)}>Buscar</button>
        </div>
    )
}

export default SearchBar