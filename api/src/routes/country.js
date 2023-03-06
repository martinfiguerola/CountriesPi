const { Router } = require('express');
// ME TRAIGO LAS TABLAS DE LA DB
const { Country, Activity } = require('../db')
// IMPORTO LAS FUNCIONES
//const { responseApi } = require('../controllers/countryControllers') 
// IMPORTO AXIOS
const axios = require('axios')
// ME TRAIGO DE SEQUELIZE LOS OPERADORES QUE NECESITE
const {Op} = require('sequelize')

const router = Router();

// --- GET COUNTRIES ----
// -- ME TRAIGO DATA DE LA API
const responseApi = async () => {
    
    const response = await axios.get('https://restcountries.com/v3/all'); 
   
    return  response.data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            image: country.flags ? country.flags[0] : 'img not found',
            continent: country.continents[0],
            capital: country.capital  ? country.capital[0]: 'Capital not found',
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        }
    });  
    
}

router.get('/', async (req, res, next) => {
    const name = req.query.name
    try {
        const allcountries = await responseApi(); // DATA DE API

        const allCountriesDb = await Country.findAll(); // DATA DE BS --> NO TIENE O SI TIENE
        
        if(!allCountriesDb.length){
            await Country.bulkCreate(allcountries)
        }
        // Si buscan por input 
        if(name){
            let countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                },
                include: { model: Activity}
            })
            return res.json(countryName)
        }
        // Si buscan por filtro
        else if(req.query.filter){

            let arrcountries = [];
            const activityFound = await Activity.findOne({
                where: { 
                    name: {
                        [Op.iLike]: '%' + req.query.filter + '%' 
                    }
                },
                include: {
                    model: Country,
                },
            })
                
            activityFound.countries.forEach(element => {
                return arrcountries.push({
                    id: element.id,
                    name: element.name,
                    image: element.image,
                    continent: element.continent,
                    population: element.population
                })
            }); 
            return arrcountries.length ? 
            res.json(arrcountries):
            res.send('No hay paises con esta actividad')
        }
        else {
            // Cuando se cargan todos los paises
            const countries = await Country.findAll({
                include: {model: Activity}
            })
            return res.json(countries)
        } 
        
    } catch (error) {
        next(error)
    }
    
})



router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    console.log(id)
    try {
        if(id){
            let countryById = await Country.findByPk(id, {
                include: {
                    model: Activity
                }
            })
            countryById?
            res.json(countryById):
            res.send('ID not found')
        }
    } catch (error) {
        next(error)
    }
})


module.exports = router;