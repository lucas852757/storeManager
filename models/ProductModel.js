const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.query('select * from products');
 return products;
};

const getProductsById = async (id) => {
  const [product] = await connection.query('select product from products where id=?', [id]);
  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
};