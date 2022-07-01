const connection = require('./connection');
const serialize = require('../helpers/serialize');
const findAllSales = async () => {
  const [sales] = await connection.query('select count(id) from sales');

  return Object.values(sales[0])[0]; // retorna valor
};

const addSales = async (id, { productId, quantity }) => {
  const query = 'insert into sales_products (sale_id, product_Id, quantity) values (?,?,?)';
  const [result] = await connection.execute(query, [id, productId, quantity]);
  return result.insertId;
};

const tableSales = async (id) => {
  const query = 'insert into sales (id) values (?)';
  await connection.query(query, [id]);
};

const productsSold = async (id) => {
  const query = 'select product_id, quantity from sales_products where sale_id=?';
  const [result] = await connection.query(query, [id]);
  return serialize(result);
};

module.exports = {
  findAllSales,
  addSales,
  tableSales,
  productsSold,
};