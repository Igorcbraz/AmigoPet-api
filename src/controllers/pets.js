const { Pet, User } = require('../models')

const createPet = async (req, res) => {
  const { id } = req.auth
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: 'Nome e user_id são obrigatórios' })
    }
    const body = { ...req.body, user_id: id }
    const pet = await Pet.create(body)
    return res.status(201).json(pet)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao criar pet', error })
  }
}

const updatePet = async (req, res) => {
  const { id } = req.params
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }
  try {
    const [updated] = await Pet.update(req.body, { where: { id } })
    if (!updated) return res.status(404).json({ message: 'Pet não encontrado' })
    const pet = await Pet.findByPk(id)
    return res.status(200).json(pet)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao atualizar pet', error })
  }
}

const deletePet = async (req, res) => {
  const { id } = req.params
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }
  try {
    const deleted = await Pet.destroy({ where: { id } })
    if (!deleted) return res.status(404).json({ message: 'Pet não encontrado' })
    return res.status(204).send()
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao deletar pet', error })
  }
}

const getAllPets = async (req, res) => {
  const { id } = req.auth
  try {
    const pets = await Pet.findAll({ where: { user_id: id } })
    return res.status(200).json(pets)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao buscar pets', error })
  }
}

const getPetById = async (req, res) => {
  const { id } = req.params
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }
  try {
    const pet = await Pet.findByPk(id, { include: [{ model: User, as: 'user' }] })
    if (!pet) return res.status(404).json({ message: 'Pet não encontrado' })
    return res.status(200).json(pet)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro ao buscar pet', error })
  }
}

module.exports = {
  createPet,
  updatePet,
  deletePet,
  getAllPets,
  getPetById,
}
