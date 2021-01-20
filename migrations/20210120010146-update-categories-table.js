module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categories',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('categories',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('categories', 'createdAt');
    await queryInterface.removeColumn('categories', 'updatedAt');
  },
};
