import React from 'react'
import {NavLink} from 'react-router-dom';
// importo los hooks que voy a usar de react
import { useEffect, useState } from 'react';
// import los hooks de react-redux (previamente lo instalo npm i react-redux)
import {useDispatch, useSelector} from 'react-redux';
// import las actions que voy a usar 
import {getCountries, countriesByContinent, orderCountries, orderActivity} from '../actions/index'
// importo los componentes que voy a usar
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Cards from './Cards';
// importo  los estilos de css module
import s from '../styles/Home.module.css';
import Loading from './Loading';

const Home = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.filtered)
  const [order, setOrder] = useState('') 
  // un estado para identificar la pagina
  const [page, setPage] = useState(1)
  const [perPage] = useState(10)
  const maxPage = Math.ceil(allCountries.length / perPage ) 
  const firstIndex = (page - 1) * perPage; // 0 
  const lastIndex = (page - 1) * perPage + perPage // 0 + 10 -> 10
  const filteredCountries = allCountries.slice(firstIndex, lastIndex)
  // allCountries.slice((page - 1) * perPage, (page - 1) * perPAge + 10
  //                     1 - 1 = 0 * 10--> (0) , 1 - 1 = 0 * 10 = 0 + 10--> 10 
  //              allCountries.slice( 0 , 10) --> 0-----9 = 10 element   
  
  useEffect(() => {
    dispatch(getCountries())
  },[dispatch])
    
  const handleSelect = (e) => {
    e.preventDefault()
    dispatch(countriesByContinent(e.target.value))
    setPage(1)
    
  }  
  const handleSort= (e) => {
    e.preventDefault();
    dispatch(orderCountries(e.target.value))
    setPage(1)
    setOrder(`Ordenado por ${e.target.value}`)
  }
  const handleByActivity = (e) => {
    e.preventDefault()
    dispatch(orderActivity(e.target.value))
    setPage(1)
  }
  if(!filteredCountries || filteredCountries.length < 1){
    return (
      <Loading/>
    )
  }
  else{

  return (
      <div className={s.container}>
        <header>
          <NavBar 
            handleSelect={handleSelect}
            handleSort={handleSort}
            handleByActivity={handleByActivity}
          />
          <SearchBar />
        </header>

          <Cards 
            filteredCountries={filteredCountries}
          />
          <Paginado page={page} setPage={setPage} maxPage={maxPage}/>
  
      </div>
    )
  }
}

export default Home