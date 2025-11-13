const { PetCareHistory, Pet } = require('../models')

const createPetCareHistory = async (data) => {
  try {
    const petCareHistory = await PetCareHistory.create(data)
    return petCareHistory
  } catch (error) {
    throw new Error(`Erro ao criar histórico de cuidado: ${error.message}`)
  }
}

const updatePetCareHistory = async (id, data) => {
  try {
    console.log(data)
    const [updated] = await PetCareHistory.update(data, { where: { id } })
    if (!updated) {
      throw new Error('Histórico de cuidado não encontrado')
    }
    const petCareHistory = await PetCareHistory.findByPk(id, {
      include: [{ model: Pet, as: 'pet' }]
    })
    return petCareHistory
  } catch (error) {
    throw new Error(`Erro ao atualizar histórico de cuidado: ${error.message}`)
  }
}

const deletePetCareHistory = async (id) => {
  try {
    const deleted = await PetCareHistory.destroy({ where: { id } })
    if (!deleted) {
      throw new Error('Histórico de cuidado não encontrado')
    }
    return true
  } catch (error) {
    throw new Error(`Erro ao deletar histórico de cuidado: ${error.message}`)
  }
}

const getAllPetCareHistories = async (filters = {}) => {
  try {
    const whereClause = {}

    if (filters.pet_id) {
      whereClause.pet_id = filters.pet_id
    }

    if (filters.care_type) {
      whereClause.care_type = filters.care_type
    }

    if (filters.status) {
      whereClause.status = filters.status
    }

    const petCareHistories = await PetCareHistory.findAll({
      where: whereClause,
      include: [{ model: Pet, as: 'pet' }],
      order: [['care_date', 'DESC']]
    })
    return petCareHistories
  } catch (error) {
    throw new Error(`Erro ao buscar históricos de cuidado: ${error.message}`)
  }
}

const getPetCareHistoryById = async (id) => {
  try {
    const petCareHistory = await PetCareHistory.findByPk(id, {
      include: [{ model: Pet, as: 'pet' }]
    })
    if (!petCareHistory) {
      throw new Error('Histórico de cuidado não encontrado')
    }
    return petCareHistory
  } catch (error) {
    throw new Error(`Erro ao buscar histórico de cuidado: ${error.message}`)
  }
}

module.exports = {
  createPetCareHistory,
  updatePetCareHistory,
  deletePetCareHistory,
  getAllPetCareHistories,
  getPetCareHistoryById
}
