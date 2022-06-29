const productModel = require('../models/ProductModel');

const listAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await productModel.getProductsById(id);
  return product;
};

module.exports = {
  listAllProducts,
  listProductById,
};