import { GET_ALL_COUNTRIES, GET_BY_CONTINENT, ORDER_COUNTRIES, GET_NAME_COUNTRIES, GET_ACTIVITIES, ORDER_ACTIVITY, GET_DETAIL, } from './types';
import axios from 'axios';

export function getCountries(){
    return async function (dispatch){
        try {
            const json = await axios.get('http://localhost:3001/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function countriesByContinent(value){
    return  {
        type: GET_BY_CONTINENT,
        payload: value
    }
}

export function orderCountries(value){
    return {
        type: ORDER_COUNTRIES,
        payload: value
    }
}

export function getNameCountries(name){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({ type: GET_NAME_COUNTRIES, payload: json.data})  
        } catch (error) {
            console.log('Country not found')
        }

    }
}

export function getAllActivities(){
    return async function (dispatch){
        try {
            const json = await axios.get('http://localhost:3001/activity')
            return dispatch({ type: GET_ACTIVITIES, payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export function orderActivity(activity){
    return async function (dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/countries?filter=${activity}`)
            return dispatch({ type: ORDER_ACTIVITY, payload: json.data })
        } catch (error) {
            console.log(error)
        }
    }
   
}

export function getDetails(id){
    return async function(dispatch){
        try {
            const json = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({ type: GET_DETAIL, payload: json.data})
        } catch (error) {
            console.log('no hay ruta')
        }
        
    }
}                                                                                   

 export function postActivity(activity){
    return async function(dispatch){
        let response = await axios.post('http://localhost:3001/activity', activity)
        return response
                                                                                                                   
    }
} 


