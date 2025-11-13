const { User, Pet } = require('../models')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../services/authService')

const createUser = async (req, res) => {
  const { name, email, password, role, status } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      status,
    })

    return res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error creating user', error })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({
      where: { email },
      include: [{
        model: Pet,
        as: 'pets',
      }]
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = generateToken(user)

    const userWithoutPassword = { ...user.toJSON() }
    delete userWithoutPassword.password

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error logging in', error })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error fetching users', error })
  }
}

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
}
