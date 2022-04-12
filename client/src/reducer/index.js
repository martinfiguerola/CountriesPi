import { GET_ALL_COUNTRIES, GET_BY_CONTINENT, ORDER_COUNTRIES, GET_NAME_COUNTRIES, GET_ACTIVITIES, ORDER_ACTIVITY, GET_DETAIL, POST_ACTIVITY } from "../actions/types"
const initialState = {
   countries: [],
   filtered: [],
   activities: [],
   details:{}
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload, // arreglo de personajes para referinos
                filtered: action.payload // filtrados
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case ORDER_ACTIVITY: 
            return {
                ...state,
                filtered: action.payload
            }
            
        case GET_BY_CONTINENT:
            if(action.payload === 'Default'){
                return {
                    ...state,
                    filtered: state.countries
                }
            } else if(action.payload) {
                return {
                    ...state,
                    filtered: state.countries.filter(c => c.continent === action.payload)
                }
            }else{
                return {
                    ...state,
                }
            }
        case ORDER_COUNTRIES: 
            if (action.payload === 'asc' ){
                state.filtered.sort((a, b) => a.name.localeCompare(b.name)) 
            }
            else if(action.payload === 'desc' ){
                state.filtered.sort((a, b) => b.name.localeCompare(a.name))
            }
            else if(action.payload === 'min'){
                state.filtered.sort((a, b) => a.population - b.population)
            }
            else if(action.payload === 'max'){
                state.filtered.sort((a, b) => b.population - a.population)
            }
            else if(action.payload === 'menor'){
                state.filtered.sort((a, b) => a.area - b.area)
            }
            else{ // mayor
                state.filtered.sort((a, b) => b.area - a.area)
            }
            return {
                ...state,
            }
        case GET_NAME_COUNTRIES:
            return {
                ...state,
                 filtered: action.payload
            }
        case GET_DETAIL:
            return{
                ...state,
                details: action.payload
            }
         case POST_ACTIVITY:
            return {
                ...state
            } 
        
            default:
                return state
    }
}