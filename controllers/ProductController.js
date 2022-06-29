const productService = require('../services/ProductService');

const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.listProductById(id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res) => {
    const products = await productService.listAllProducts();
    return res.status(200).json(products);
};

module.exports = {
  getOneProduct,
  getAllProducts,
};