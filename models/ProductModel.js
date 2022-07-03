const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.query('select * from products');
 return products;
};

const getProductsById = async (id) => {
  const [product] = await connection.query('select * from products where id=?', [id]);
  return product;
};

const findProduct = async (id) => {
const query = 'select id from products where id=?';
const [foundProduct] = await connection.query(query, [id]);
return foundProduct;
};

const addProduct = async (name) => {
  const query = 'insert into products (name) values (?)';
  const result = await connection.execute(query, [name]);
  return {
    id: result[0].insertId,
    name,
  };
};

const updateProduct = async (id, name) => {
  const query = 'update products set name=? where id=?';
  await connection.query(query, [name, id]);
  return ({ id, name });
};
module.exports = {
  getAllProducts,
  getProductsById,
  findProduct,
  addProduct,
  updateProduct,
};