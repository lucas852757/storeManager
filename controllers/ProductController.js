const getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.listProductById(id);
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOneProduct,
};