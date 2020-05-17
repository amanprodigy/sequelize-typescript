"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_follower", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        field: "user_id",
        allowNull: false,
        comment: "User id of the user who is getting followed"
      },
      follower_id: {
        type: Sequelize.UUID,
        field: "follower_id",
        allowNull: false,
        comment: "User id of the user who is following"
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
    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable("user_follower")
};
