const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.query('select count(id) from sales');
  return Object.values(sales[0])[0]; // retorna valor
};

const addSales = async (id, { productId, quantity }) => {
  const query = 'insert into sales_products (sale_id, product_Id, quantity) values (?,?,?)';
  await connection.execute(query, [id, productId, quantity]);
};

const tableSales = async (id) => {
  const query = 'insert into sales (id) values (?)';
  await connection.query(query, [id]);
};

module.exports = {
  findAllSales,
  addSales,
  tableSales,
};