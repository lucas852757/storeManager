const connection = require('./connection');

const findAllSales = async () => {
  const [sales] = await connection.query('select count(id) from sales');
  return Object.values(sales[0])[0]; // retorna valor
};

module.exports = {
  findAllSales,
};