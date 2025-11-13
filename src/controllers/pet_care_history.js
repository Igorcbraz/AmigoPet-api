const petCareHistoryService = require('../services/petCareHistoryService')

const createPetCareHistory = async (req, res) => {
  try {
    const { pet_id, care_date, care_type } = req.body

    if (!pet_id || !care_date || !care_type) {
      return res.status(400).json({
        message: 'pet_id, care_date e care_type são obrigatórios'
      })
    }

    const petCareHistory = await petCareHistoryService.createPetCareHistory(req.body)
    return res.status(201).json(petCareHistory)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Erro ao criar histórico de cuidado',
      error: error.message
    })
  }
}

const updatePetCareHistory = async (req, res) => {
  const { id } = req.params

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }

  try {
    const petCareHistory = await petCareHistoryService.updatePetCareHistory(id, req.body)
    return res.status(200).json(petCareHistory)
  } catch (error) {
    console.error(error)
    if (error.message.includes('não encontrado')) {
      return res.status(404).json({ message: error.message })
    }
    return res.status(500).json({
      message: 'Erro ao atualizar histórico de cuidado',
      error: error.message
    })
  }
}

const deletePetCareHistory = async (req, res) => {
  const { id } = req.params

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }

  try {
    await petCareHistoryService.deletePetCareHistory(id)
    return res.status(204).send()
  } catch (error) {
    console.error(error)
    if (error.message.includes('não encontrado')) {
      return res.status(404).json({ message: error.message })
    }
    return res.status(500).json({
      message: 'Erro ao deletar histórico de cuidado',
      error: error.message
    })
  }
}

const getAllPetCareHistories = async (req, res) => {
  try {
    const { pet_id, care_type, status } = req.query
    const filters = {}

    if (pet_id) filters.pet_id = pet_id
    if (care_type) filters.care_type = care_type
    if (status) filters.status = status

    const petCareHistories = await petCareHistoryService.getAllPetCareHistories(filters)
    return res.status(200).json(petCareHistories)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Erro ao buscar históricos de cuidado',
      error: error.message
    })
  }
}

const getPetCareHistoryById = async (req, res) => {
  const { id } = req.params

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID inválido' })
  }

  try {
    const petCareHistory = await petCareHistoryService.getPetCareHistoryById(id)
    return res.status(200).json(petCareHistory)
  } catch (error) {
    console.error(error)
    if (error.message.includes('não encontrado')) {
      return res.status(404).json({ message: error.message })
    }
    return res.status(500).json({
      message: 'Erro ao buscar histórico de cuidado',
      error: error.message
    })
  }
}

module.exports = {
  createPetCareHistory,
  updatePetCareHistory,
  deletePetCareHistory,
  getAllPetCareHistories,
  getPetCareHistoryById
}
