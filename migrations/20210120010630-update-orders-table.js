module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('orders',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('orders', 'createdAt');
    await queryInterface.removeColumn('orders', 'updatedAt');
  },
};
