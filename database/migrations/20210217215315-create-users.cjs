'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => 
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM(['male', 'female', 'empty']),
        allowNull: false,
        defaultValue: 'empty',
      },
    }),

  down: async queryInterface => 
    await queryInterface.dropTable('Users')
}
