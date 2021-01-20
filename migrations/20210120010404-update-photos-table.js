module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('photos',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('photos', 'createdAt');
    await queryInterface.removeColumn('photos', 'updatedAt');
  },
};
