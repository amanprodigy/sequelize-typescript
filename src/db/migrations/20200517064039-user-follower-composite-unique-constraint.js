'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   const transaction = await queryInterface.sequelize.transaction();
   try {
    await queryInterface.addIndex(
      'user_follower',
      {
        fields: ['user_id','follower_id'],
        unique: true,
        transaction,
      }
    );
   } catch (error) {
    await transaction.rollback();
    throw error;
   }
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
