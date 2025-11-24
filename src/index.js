const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
const { authenticateToken } = require('./middleware/authMiddleware')
const { errorHandler } = require('./middleware/errorHandler')
const logger = require('logger-endpoints-api')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authenticateToken)
app.use(logger)

app.use('/api', routes)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'AmigoPet API',
    status: 'ok',
  })
})

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: Date.now(),
  })
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
