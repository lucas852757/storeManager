/**
 * https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-234-arquitetura-de-software-testando-as-camadas
 */

// lecture/23.4
const Joi = require('joi');
const productModel = require('../models/ProductModel');
const { runSchema } = require('../utils/runSchema');

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

  // Aula do professor Leandro
  const { error } = runSchema(schema)({ name });

  if (error) {
    throw error;
  }
  /* const foundProduct = await productModel.findProduct(name);

  if (!foundProduct.length) {
    await productModel.addProduct(name);
  } */
  const id = await productModel.addProduct(name);

  return {
    id,
    name,
  };
};

const updateProduct = async (id, name) => {
  const schema = Joi.object({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().min(5).not().empty()
      .required(),
  });

  const { error } = runSchema(schema)({ id, name });
  // const { error } = schema.validate({ id, name });

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
  const foundProduct = await productModel.findProduct(id);

  if (!foundProduct.length) {
    const dbError = { status: 404, message: 'Product not found' };
    throw dbError;
  }

  await productModel.deleteProduct(id);
};

const selectProductsByName = async (q) => {
  if (q) {
    const products = await productModel.selectProductsByName(q);
    return products;
  }
  const products = await productModel.selectAllProducts();
  return products;
};

module.exports = {
  listAllProducts,
  listProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  selectProductsByName,
};