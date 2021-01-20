module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('clients',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('clients', 'createdAt');
    await queryInterface.removeColumn('clients', 'updatedAt');
  },
};
