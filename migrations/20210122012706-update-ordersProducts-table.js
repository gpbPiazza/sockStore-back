module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ordersProducts',
      'quantity',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('ordersProducts', 'createdAt');
  },
};
