module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('adresses',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('adresses',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('adresses', 'createdAt');
    await queryInterface.removeColumn('adresses', 'updatedAt');
  },
};
