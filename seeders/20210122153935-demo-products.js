module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Meia Cano Longo Arco Íris Lupo Urban',
        price: 18.70,
        size: 'U',
        description: 'Confeccionada em algodão penteado super macio e confortável. Meia cano alto com charmoso desenho em jacquard eletrônico de arco iris.',
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Estampado Cactos Preto',
        price: 12.90,
        size: 'U',
        description: `Estampado Cactos. Cano longo. Marca: Viko. Tecido: Algodão.Composição: 60% Algodão30% Poliamida10% Outras Fibras
        `,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Mexicana Lupo Urban',
        price: 23.00,
        size: 'U',
        description: `
          Meia cano alto com charmoso desenho em jacquard eletrônico de comida mexicana. Punho soft em tecido canelado elástico, oferece extremo conforto.
        `,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Alto Estampada',
        price: 15.90,
        size: 'U',
        description: `
          Traz uma estampa moderna que completa seu estilo com todo conforto. As meias estampadas caem bem com botas, coturnos e também combinam com tênis urbanos para um visual de atitude.
        `,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Meia Cano Longo Estampa Fogo Multicores ',
        price: 12.90,
        size: 'U',
        description: `
          Cano longo
          Estampa fogo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kit com 3 Meias Masculinas Invisíveis Puma Sortido',
        price: 29.90,
        size: 'U',
        description: `
          Cano curto
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kit com 3 Meias Masculinas Invisíveis Lupo Preto',
        price: 35.90,
        size: 'U',
        description: `
          Cano curto
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Estampa Poá',
        price: 23.90,
        size: 'U',
        description: `
          Cano longo
          Estampa poá
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Estampa Listrada',
        price: 12.90,
        size: 'U',
        description: `
          Cano longo
          Estampa listrada horizontal
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Estampa Simpsons',
        price: 12.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Estampa Monstros S.A',
        price: 23.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Monalisa',
        price: 25.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo O Grito',
        price: 25.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Game Over',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo ET',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo xadrez',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo lurk atack',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Frida Desenho',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo super mario',
        price: 22.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo La casa de papel',
        price: 42.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo lula molusco',
        price: 32.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo bob esponja',
        price: 32.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Meia Cano Longo Mari green',
        price: 32.90,
        size: 'U',
        description: `
          Cano longo
          Tecido: Algodão
          Composição:  60% algodão, 30% poliamida e 10% outras fibras.
        `,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
