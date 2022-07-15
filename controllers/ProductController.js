const productService = require('../services/ProductService');

const getOneProduct = async (req, res, _next) => {
    const { id } = req.params;
    const product = await productService.listProductById(id);
    return res.status(200).json(product);
};

const getAllProducts = async (req, res) => {
    const products = await productService.listAllProducts();
    return res.status(200).json(products);
};

const postProducts = async (req, res, _next) => {
    const { name } = req.body;
    const products = await productService.createProduct(name);
    return res.status(201).json(products);
};

const updateProduct = async (req, res, _next) => {
    const { id } = req.params;
    const { name } = req.body;
    const product = await productService.updateProduct(id, name);
    return res.status(200).json(product);
};

const deleteProduct = async (req, res, _next) => {
    const { id } = req.params;
    await productService.deleteProduct(id);
    return res.status(204).end();
};

const selectProductsByName = async (req, res, _next) => {
    const { q } = req.query;
    const products = await productService.selectProductsByName(q);
    return res.status(200).json(products);
 };

module.exports = {
  getOneProduct,
  getAllProducts,
  postProducts,
  updateProduct,
  deleteProduct,
  selectProductsByName,
};