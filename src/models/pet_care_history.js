'use strict'
module.exports = (sequelize, DataTypes) => {
  const PetCareHistory = sequelize.define('PetCareHistory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    pet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    care_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    care_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    care_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  }, {
    tableName: 'pet_care_history',
    timestamps: true
  })

  PetCareHistory.associate = function (models) {
    PetCareHistory.belongsTo(models.Pet, { foreignKey: 'pet_id', as: 'pet' })
  }

  return PetCareHistory
}
