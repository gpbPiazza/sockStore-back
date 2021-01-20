module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categoriesProducts',
      'createdAt',
      {
        type: Sequelize.DATE,
      });
    await queryInterface.addColumn('categoriesProducts',
      'updatedAt',
      {
        type: Sequelize.DATE,
      });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('categoriesProducts', 'createdAt');
    await queryInterface.removeColumn('categoriesProducts', 'updatedAt');
  },
};
