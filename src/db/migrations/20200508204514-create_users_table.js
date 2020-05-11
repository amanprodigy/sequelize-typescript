"use strict";

const { Sequelize } = require('sequelize');

module.exports = {
  up: (queryInterface) =>
    queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultvalue: Sequelize.UUIDV4,
        allowNull: false
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(35),
        comment: 'Email that the user registered with',
        unique: true
      },
      password: {
        allowNull: false,
        comment: 'This is the password hash. Not the actual password',
        type: Sequelize.STRING(300)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface) => queryInterface.dropTable("users")
};
