const { Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

class Categorie extends Sequelize.Model {}

Categorie.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        sequelize,
        modelName: 'categorie'
    }
);

module.exports = Categorie;
