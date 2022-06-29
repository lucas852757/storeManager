const productModel = require('../models/ProductModel');

const listAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

const listProductById = async (id) => {
  const product = await productModel.getProductsById(id);
  if (!product.length) {
    const error = { status: 404, message: 'Product not found' };
    throw error;
  }
  return product[0];
};

module.exports = {
  listAllProducts,
  listProductById,
};