const NotFoundError = require("../errors/NotFoundError");
const Categorie = require("../models/Categorie")
const Photo = require("../models/Photo")
const Product = require("../models/Product")

async function getProductInformations(id){
   const product = Product.findOne({
       where: {
           id,
       },
       include: [Categorie, Photo],
   });
   
   if(!product) throw new NotFoundError;

   return product;
}

module.exports = {
    getProductInformations,
}