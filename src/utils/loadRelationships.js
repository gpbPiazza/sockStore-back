const Category = require('../models/Category');
const Product = require('../models/Product');
const CategoriesProduct = require('../models/CategoriesProduct');
const Photo = require('../models/Photo');
const OrdersProduct = require('../models/OrdersProduct');
const Order = require('../models/Order');
const Address = require('../models/Address');
const Client = require('../models/Client');

Category.belongsToMany(Product, { through: CategoriesProduct });
Product.belongsToMany(Category, { through: CategoriesProduct });

Order.belongsToMany(Product, { through: OrdersProduct });
Product.belongsToMany(Order, { through: OrdersProduct });
Client.hasOne(Address);
Product.hasMany(Photo);
Client.hasMany(Order);
