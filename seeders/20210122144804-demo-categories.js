module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Cano longo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cano curto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampa poá',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampa geométrica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampa listrada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampas de séries',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampas de games',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampas de pinturas famosas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampas de filmes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Estampas de desenhos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};
