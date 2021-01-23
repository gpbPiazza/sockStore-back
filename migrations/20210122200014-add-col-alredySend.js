module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders',
      'alredySend',
      {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('orders', 'alredySend');
  },
};
