'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(35),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("Users")
};
