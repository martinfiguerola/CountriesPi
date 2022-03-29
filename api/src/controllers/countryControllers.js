
/* const axios = require('axios')

const responseApi = async () => {
    const response = await axios.get('https://restcountries.com/v3/all'); 
    //console.log(response)  
    const countriesApi = await response.data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            flags: country.flags[0],
            continents: country.continents[0],
            capital: country.capital && country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    });  
    return countriesApi
}

module.exports = {
    responseApi
} */