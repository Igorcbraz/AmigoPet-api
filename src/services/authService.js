const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}

module.exports = { generateToken }
