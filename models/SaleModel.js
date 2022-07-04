const connection = require('./connection');
const serialize = require('../helpers/serialize');

const findAllSales = async () => {
  const [sales] = await connection.query('select count(id) from sales');

  return Object.values(sales[0])[0]; // retorna valor
};

const addSales = async (id, { productId, quantity }) => {
  const query = 'insert into sales_products (sale_id, product_Id, quantity) values (?,?,?)';
  await connection.query(query, [id, productId, quantity]);
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

const getSales = async () => {
  const query = 'select sp.sale_id, s.date, sp.product_id, sp.quantity from'
    + ' sales_products as sp inner join sales as s on s.id=sp.sale_id';
  const [result] = await connection.query(query); 
  return serialize(result);
};

const getSale = async (id) => {
  const query = 'select s.date, sp.product_id, sp.quantity from'
    + ' sales_products as sp inner join sales as s on s.id=sp.sale_id where s.id=?';
  const [result] = await connection.query(query, [id]);
  return serialize(result);
};

const registerOfSale = async (id) => {
  const query = 'select id from sales where id=?';
  const [result] = await connection.query(query, [id]);
  return result;
};

const deleteSale = async (id) => { 
  const query = 'delete from sales where id=?';
  await connection.query(query, [id]);
};

module.exports = {
  findAllSales,
  addSales,
  tableSales,
  productsSold,
  getSales,
  getSale,
  registerOfSale,
  deleteSale,
};