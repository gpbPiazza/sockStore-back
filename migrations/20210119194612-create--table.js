module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('adresses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cep: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      neighborhood: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'clients',
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('adresses');
  },
};
