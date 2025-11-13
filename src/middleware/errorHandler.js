const errorHandler = (err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Unauthorized - No valid token provided' })
  }

  return res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  })
}

module.exports = { errorHandler }
