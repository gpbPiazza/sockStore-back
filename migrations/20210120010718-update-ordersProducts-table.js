module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ordersProducts',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('ordersProducts',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('ordersProducts', 'createdAt');
    await queryInterface.removeColumn('ordersProducts', 'updatedAt');
  },
};
