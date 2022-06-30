const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.query('select * from products');
 return products;
};

const getProductsById = async (id) => {
  const [product] = await connection.query('select * from products where id=?', [id]);
  return product;
};

const findProduct = async (name) => {
const query = 'select name from products where name=?';
const [foundProduct] = await connection.query(query, [name]);
return foundProduct;
};
module.exports = {
  getAllProducts,
  getProductsById,
  findProduct,
};