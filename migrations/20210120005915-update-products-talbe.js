module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('products',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('products',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('products', 'createdAt');
    await queryInterface.removeColumn('products', 'updatedAt');
  },
};
