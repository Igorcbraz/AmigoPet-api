const express = require('express')
const router = express.Router()
const {
  createPet,
  updatePet,
  deletePet,
  getAllPets,
  getPetById
} = require('../controllers/pets')

router.post('/pets', createPet)

router.put('/pets/:id', updatePet)

router.delete('/pets/:id', deletePet)

router.get('/pets', getAllPets)

router.get('/pets/:id', getPetById)

module.exports = router
