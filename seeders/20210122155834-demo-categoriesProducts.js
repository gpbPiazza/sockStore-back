/* eslint-disable quotes */
module.exports = {
  up: async (queryInterface) => {
    const categoryLongo = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Cano longo' LIMIT 1`);
    const categoryIdLongo = categoryLongo[0][0].id;

    const categoryCurto = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Cano curto' LIMIT 1`);
    const categoryIdCurto = categoryCurto[0][0].id;

    const categoryPoa = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa poá' LIMIT 1`);
    const categoryIdPoa = categoryPoa[0][0].id;

    const categoryGeometrica = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdGeometrica = categoryGeometrica[0][0].id;

    const categoryListrada = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdListrada = categoryListrada[0][0].id;

    const categorySerie = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdSerie = categorySerie[0][0].id;

    const categoryGame = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdGame = categoryGame[0][0].id;

    const categoryPintura = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdPintura = categoryPintura[0][0].id;

    const categoryFilme = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdFilme = categoryFilme[0][0].id;

    const categoryDesenho = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name='Estampa geométrica' LIMIT 1`);
    const categoryIdDesenho = categoryDesenho[0][0].id;

    const arcoIris = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Arco Íris Lupo Urban' LIMIT 1`);
    const arcoIrisId = arcoIris[0][0].id;

    const cactos = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Estampado Cactos Preto' LIMIT 1`);
    const cactosId = cactos[0][0].id;

    const mexicana = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Mexicana Lupo Urban' LIMIT 1`);
    const mexicanaId = mexicana[0][0].id;

    const estampada = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Alto Estampada' LIMIT 1`);
    const estampadaId = estampada[0][0].id;

    const fogo = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name=' Meia Cano Longo Estampa Fogo Multicores ' LIMIT 1`);
    const fogoId = fogo[0][0].id;

    const curtoPuma = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Kit com 3 Meias Masculinas Invisíveis Puma Sortido' LIMIT 1`);
    const curtoPumaId = curtoPuma[0][0].id;

    const curtoLupo = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Kit com 3 Meias Masculinas Invisíveis Lupo Preto' LIMIT 1`);
    const curtoLupoId = curtoLupo[0][0].id;

    const longoPoa = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Estampa Poá' LIMIT 1`);
    const longoPoaId = longoPoa[0][0].id;

    const listradaLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Estampa Listrada' LIMIT 1`);
    const listradaId = listradaLonga[0][0].id;

    const simpsonsLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Estampa Simpsons' LIMIT 1`);
    const simpsonsLongaId = simpsonsLonga[0][0].id;

    const monstrosSaLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Estampa Monstros S.A' LIMIT 1`);
    const monstrosSaLongaId = monstrosSaLonga[0][0].id;

    const monalisaLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Monalisa' LIMIT 1`);
    const monalisaLongaId = monalisaLonga[0][0].id;

    const gritoLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo O Grito' LIMIT 1`);
    const gritoLongaId = gritoLonga[0][0].id;

    const gameOverLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Game Over' LIMIT 1`);
    const gameOverLongaId = gameOverLonga[0][0].id;

    const etLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo ET' LIMIT 1`);
    const etLongaId = etLonga[0][0].id;

    const xadrezLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo xadrez' LIMIT 1`);
    const xadrezLongaId = xadrezLonga[0][0].id;

    const lurkLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo lurk atack' LIMIT 1`);
    const lurkLongaId = lurkLonga[0][0].id;

    const fridaLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Frida Desenho' LIMIT 1`);
    const fridaLongaId = fridaLonga[0][0].id;

    const marioLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo super mario' LIMIT 1`);
    const marioLongaId = marioLonga[0][0].id;

    const casaPapelLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo La casa de papel' LIMIT 1`);
    const casaPapelLongaId = casaPapelLonga[0][0].id;

    const lulaLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo lula molusco' LIMIT 1`);
    const lulaLongaId = lulaLonga[0][0].id;

    const bobLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo bob esponja' LIMIT 1`);
    const bobLongaId = bobLonga[0][0].id;

    const mariLonga = await queryInterface.sequelize.query(`SELECT id FROM products WHERE name='Meia Cano Longo Mari green' LIMIT 1`);
    const mariLongaId = mariLonga[0][0].id;

    await queryInterface.bulkInsert('categoriesProducts', [
      {
        categoryId: categoryIdLongo,
        productId: arcoIrisId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: cactosId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: mexicanaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: estampadaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: fogoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdCurto,
        productId: curtoPumaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdCurto,
        productId: curtoLupoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: longoPoaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdPoa,
        productId: longoPoaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: listradaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdListrada,
        productId: listradaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: simpsonsLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdDesenho,
        productId: simpsonsLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdSerie,
        productId: simpsonsLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: monstrosSaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdDesenho,
        productId: monstrosSaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdFilme,
        productId: monstrosSaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: monalisaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdPintura,
        productId: monalisaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: gritoLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdPintura,
        productId: gritoLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: gameOverLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdGame,
        productId: gameOverLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: etLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdFilme,
        productId: etLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: xadrezLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdGeometrica,
        productId: xadrezLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: lurkLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdDesenho,
        productId: lurkLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: fridaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdPintura,
        productId: fridaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: marioLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdGame,
        productId: marioLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: casaPapelLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdSerie,
        productId: casaPapelLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: lulaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdDesenho,
        productId: lulaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdSerie,
        productId: lulaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: bobLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdDesenho,
        productId: bobLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdSerie,
        productId: bobLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: categoryIdLongo,
        productId: mariLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('categoriesProducts', null, {}),
};
