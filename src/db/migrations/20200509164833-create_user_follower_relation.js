"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable("user_follower", {
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
      await queryInterface.addIndex(
        'user_follower',
        {
          fields: ['user_id', 'follower_id'],
          unique: true,
          transaction,
        }
      );
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
    return
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeIndex('user_follower', ['user_id', 'follower_id'], { transaction });
      await queryInterface.dropTable("user_follower")
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
    
  } 
};
