const listAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};

module.exports = {
  listAllProducts,
};