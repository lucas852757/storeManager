const productService = require('../services/ProductService');

const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.listProductById(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllProducts = async (req, res) => {
    const products = await productService.listAllProducts();
    return res.status(200).json(products);
};

const postProducts = async (req, res, next) => {
  try {
    const { name } = req.body;
    const products = await productService.createProduct(name);
    return res.status(201).json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const product = await productService.updateProduct(id, name);
    return res.status(201).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getOneProduct,
  getAllProducts,
  postProducts,
  updateProduct,
};