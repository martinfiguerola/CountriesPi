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
    const response = await axios.get('https://restcountries.com/v3.1/all'); 
   
    return  response.data?.map(country => {
        return {
            id: country.cca3,
            name: country.name.common,
            image: country.flags.png ? country.flags.png : 'img not found',
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
    //const filterContinent = req.query.filter
    const countriesApi = await responseApi()
    try {
        // VERIFICO SI ESTA LA BD LLENA
        const hay = await Country.findAll();

        if(!hay.length) await Country.bulkCreate(countriesApi)  

    } catch (error) {
        next(error)
    }
    // SI HAY NOMBRE
    if(name){
        try {
            let countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: '%' + name + '%'
                    }
                },
                include: { model: Activity}
            })
            countryName.length ?
            res.json(countryName):
            res.send('Country not found')
        } catch (error) {
            next(error)
        }
    }
    else if(req.query.filter){
        try {
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
            activityFound.countries?.forEach(element => {
                return arrcountries.push({
                    id: element.id,
                    name: element.name,
                    image: element.image,
                    continent: element.continent,
                    population: element.population
                })
            }); 
            arrcountries.length ? 
            res.json(arrcountries):
            res.send('No hay paises con esta actividad')
        } catch (error) {
            next(error)
        }   
    } 
    else {
        try {
            const countries = await Country.findAll({
                include: {model: Activity}
            })
            res.json(countries)
        } catch (error) {
            next(error)

        }
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