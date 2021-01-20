const Category = require('../models/Category');
const Product = require('../models/Product');
const CategoriesProduct = require('../models/CategoriesProduct');
const Photo = require('../models/Photo');

Category.belongsToMany(Product, { through: CategoriesProduct });
Product.belongsToMany(Category, { through: CategoriesProduct });
Product.hasMany(Photo);
