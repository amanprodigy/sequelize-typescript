"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("tweets", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultvalue: Sequelize.UUIDV4,
        allowNull: false
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      authorId: {
        allowNull: false,
        type: Sequelize.UUID
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
        allowNull: false,
        type: Sequelize.DATE
      }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable("tweets")
};
