const express = require('express')
const router = express.Router()
const {
  createPetCareHistory,
  updatePetCareHistory,
  deletePetCareHistory,
  getAllPetCareHistories,
  getPetCareHistoryById
} = require('../controllers/pet_care_history')

router.post('/pet-care-history', createPetCareHistory)

router.put('/pet-care-history/:id', updatePetCareHistory)

router.delete('/pet-care-history/:id', deletePetCareHistory)

router.get('/pet-care-history', getAllPetCareHistories)

router.get('/pet-care-history/:id', getPetCareHistoryById)

module.exports = router
