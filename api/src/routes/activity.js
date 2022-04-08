const { Router } = require('express');
// ME TRAIGO LAS TABLAS DE LA DB
const { Country, Activity } = require('../db')
const axios = require('axios')
// ME TRAIGO DE SEQUELIZE LOS OPERADORES QUE NECESITE
const {Op} = require('sequelize')
const router = Router();

router.post('/', async (req, res, next) => {
   // name, dificultad, duration, temporada, countires
   const {name, difficulty, duration, season, countries} = req.body
   //console.log(name, difficulty, duration)
   try {
      const activityCreate = await Activity.create({
         name,
         difficulty,
         duration,
         season
      })
      let countriesDb = await Country.findAll(
         { where: { name: countries } 
      })
      await activityCreate.addCountries(countriesDb)
      return res.json({message: 'Activity Created'})
   } catch (error) {
      next(error)
   }
})
router.get('/', async (req, res, next) => {
   try {
      const activitiesAll = await Activity.findAll()
      res.json(activitiesAll)
   } catch (error) {
      next(error)
   }
  
   
})


module.exports = router;