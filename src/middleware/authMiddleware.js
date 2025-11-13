const { expressjwt } = require('express-jwt')

const authenticateToken = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
}).unless({
  path: [
    { url: '/', methods: ['GET'] },
    { url: '/health', methods: ['GET'] },
    { url: '/api/users/login', methods: ['POST'] },
    { url: '/api/users', methods: ['POST'] },
  ]
})

module.exports = { authenticateToken }
