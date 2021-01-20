const Categorie = require("../models/Categorie");
const Product = require("../models/Product");
const CategoriesProduct = require("../models/CategoriesProduct");
const Photo = require("../models/Photo");

Categorie.belongsToMany(Product, { through: CategoriesProduct });
Product.belongsToMany(Categorie, { through: CategoriesProduct });
Product.hasMany(Photo);