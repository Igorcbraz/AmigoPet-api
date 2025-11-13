const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, loginUser } = require('../controllers/users.js')

router.post('/users/', createUser)

router.post('/users/login', loginUser)

router.get('/users/', getAllUsers)

module.exports = router
