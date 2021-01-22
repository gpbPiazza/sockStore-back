module.exports = {
  up: async (queryInterface, Sequelize) => {
    const arcoIris = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Arco Íris Lupo Urban\' LIMIT 1');
    const arcoIrisId = arcoIris[0][0].id;

    const cactos = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Estampado Cactos Preto\' LIMIT 1');
    const cactosId = cactos[0][0].id;

    const mexicana = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Mexicana Lupo Urban\' LIMIT 1');
    const mexicanaId = mexicana[0][0].id;

    const estampada = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Alto Estampada\' LIMIT 1');
    const estampadaId = estampada[0][0].id;

    const fogo = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\' Meia Cano Longo Estampa Fogo Multicores \' LIMIT 1');
    const fogoId = fogo[0][0].id;

    const curtoPuma = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Kit com 3 Meias Masculinas Invisíveis Puma Sortido\' LIMIT 1');
    const curtoPumaId = curtoPuma[0][0].id;

    const curtoLupo = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Kit com 3 Meias Masculinas Invisíveis Lupo Preto\' LIMIT 1');
    const curtoLupoId = curtoLupo[0][0].id;

    const longoPoa = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Estampa Poá\' LIMIT 1');
    const longoPoaId = longoPoa[0][0].id;

    const listradaLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Estampa Listrada\' LIMIT 1');
    const listradaId = listradaLonga[0][0].id;

    const simpsonsLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Estampa Simpsons\' LIMIT 1');
    const simpsonsLongaId = simpsonsLonga[0][0].id;

    const monstrosSaLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Estampa Monstros S.A\' LIMIT 1');
    const monstrosSaLongaId = monstrosSaLonga[0][0].id;

    const monalisaLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Monalisa\' LIMIT 1');
    const monalisaLongaId = monalisaLonga[0][0].id;

    const gritoLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo O Grito\' LIMIT 1');
    const gritoLongaId = gritoLonga[0][0].id;

    const gameOverLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Game Over\' LIMIT 1');
    const gameOverLongaId = gameOverLonga[0][0].id;

    const etLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo ET\' LIMIT 1');
    const etLongaId = etLonga[0][0].id;

    const xadrezLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo xadrez\' LIMIT 1');
    const xadrezLongaId = xadrezLonga[0][0].id;

    const lurkLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo lurk atack\' LIMIT 1');
    const lurkLongaId = lurkLonga[0][0].id;

    const fridaLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Frida Desenho\' LIMIT 1');
    const fridaLongaId = fridaLonga[0][0].id;

    const marioLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo super mario\' LIMIT 1');
    const marioLongaId = marioLonga[0][0].id;

    const casaPapelLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo La casa de papel\' LIMIT 1');
    const casaPapelLongaId = casaPapelLonga[0][0].id;

    const lulaLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo lula molusco\' LIMIT 1');
    const lulaLongaId = lulaLonga[0][0].id;

    const bobLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo bob esponja\' LIMIT 1');
    const bobLongaId = bobLonga[0][0].id;

    const mariLonga = await queryInterface.sequelize.query('SELECT id FROM products WHERE name=\'Meia Cano Longo Mari green\' LIMIT 1');
    const mariLongaId = mariLonga[0][0].id;

    await queryInterface.bulkInsert('photos', [
      {
        photo: 'https://www.lingerie.com.br/lojas/00000159/prod/LUP16903-2_2.jpg',
        productId: arcoIrisId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        photo: 'https://www-lingerie-com-br.cdn.ampproject.org/i/s/www.lingerie.com.br/lojas/00000159/prod/LUP16903-2_3.jpg',
        productId: arcoIrisId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://img.lojasrenner.com.br/item/548298076/zoom/1.jpg',
        productId: cactosId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://www.cueca.com.br/lojas/00000209/prod/LUP16901_17_2.jpg?cccfc=221eea5e',
        productId: mexicanaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cdn.ecvol.com/s/www.mercadomasculino.com.br/produtos/meia-cano-longo-cavalera-algodao-colorida-listrada/g/0.jpg?v=6',
        productId: estampadaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://img.lojasrenner.com.br/item/549104886/zoom/1.jpg',
        productId: fogoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://img.lojasrenner.com.br/item/530466545/large/1.jpg',
        productId: curtoPumaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://img.lojasrenner.com.br/item/546571083/zoom/1.jpg',
        productId: curtoLupoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://i.pinimg.com/originals/ae/65/6f/ae656f4b57bda2226e84ce32c7f522f5.jpg',
        productId: longoPoaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://i.pinimg.com/originals/af/50/71/af5071b89014b0e7c27a1e9f46152eec.png',
        productId: listradaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://29141.cdn.simplo7.net/static/29141/sku/meias-estampadas-meia-estampada-bart-simpson-simpson-1544535842497.png',
        productId: simpsonsLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cdn.awsli.com.br/300x300/1542/1542971/produto/56824383/34a54cbf76.jpg',
        productId: monstrosSaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://images-americanas.b2w.io/produtos/01/00/images/99665/7/99665721_1GG.jpg',
        productId: monalisaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://produtos.fotos-riachuelo.com.br/media/catalog/product/cache/3541e153ef6ead3044d72626c3847968/m/e/meia-cano-longo-mona-lisa---lilas-preto-13790633_foto1_frontal.jpg',
        productId: monalisaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://http2.mlstatic.com/D_NQ_NP_751453-MLB31719076708_082019-W.jpg',
        productId: gritoLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://static.dafiti.com.br/p/DUCK-MEIAS-Meia-Cano-Alto-Estampada-Masculina-3729-1685676-1-zoom.jpg',
        productId: gameOverLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cea.vteximg.com.br/arquivos/ids/14623544-468-560/Meia-Masculina-Cano-Alto-Divertida-Estampada-de-Et-Roxa-9787860-Roxo_1.jpg?v=637287171680230000',
        productId: etLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cea.vteximg.com.br/arquivos/ids/3775209-468-560/Meia-Masculina-Cano-Alto-Divertida-ET-Preta-9158685-Preto_4.jpg?v=636664765866870000',
        productId: etLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cea.vteximg.com.br/arquivos/ids/9987514-468-560/Meia-Masculina-Cano-Alto-Estampada-Xadrez-Marrom-8999676-Marrom_4.jpg?v=636951658926400000',
        productId: xadrezLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://static.dafiti.com.br/p/Comfy-Meia-Estampada-Comfy-Black-Xadrez-Branco-4418-5366074-1-zoom.jpg',
        productId: xadrezLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://static.dafiti.com.br/p/Lurk-Meia-Estampada-Lurk-Attack-Bord%C3%B4-9375-7662815-1-zoom.jpg',
        productId: lurkLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cdn.colab55.com/images/5501/studio/6362/art/30383/socks.png',
        productId: fridaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://29141.cdn.simplo7.net/static/29141/sku/meias-estampadas-meia-estampada-mario-bros-infantil--p-1604085901629.png',
        productId: marioLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://images-na.ssl-images-amazon.com/images/I/51VBF0Rek-L._AC_SX385_.jpg',
        productId: casaPapelLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://img.lojasrenner.com.br/item/551335940/zoom/1.jpg',
        productId: lulaLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://images-na.ssl-images-amazon.com/images/I/61q8pFk8r0L._AC_SX385_.jpg',
        productId: bobLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'https://cdn.awsli.com.br/600x1000/238/238120/produto/45055786/c4c38920c1.jpg',
        productId: mariLongaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('photos', null, {}),
};
