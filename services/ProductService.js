const Joi = require('joi');
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

const createProduct = async (name) => {
  const schema = Joi.object({
    name: Joi.string().not().empty().min(5)
      .required(),
  });
  const { error } = schema.validate({ name });
  if (error) {
    throw error;
  }
  /* const foundProduct = await productModel.findProduct(name);

  if (!foundProduct.length) {
    await productModel.addProduct(name);
  } */
  const product = await productModel.addProduct(name);
  return product;
};

const updateProduct = async (id, name) => {
  const schema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().min(5).not().empty()
      .required(),
  });

  const { error } = schema.validate({ id, name });

  if (error) {
    throw error;
  }
  const foundProduct = await productModel.findProduct(id);

  if (!foundProduct.length) {
    const dbError = { status: 404, message: 'Product not found' };
    throw dbError;
  }
  const product = await productModel.updateProduct(id, name);
  return product;
};

const deleteProduct = async (id) => {

};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};