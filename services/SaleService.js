const saleModel = require('../models/SaleModel');

const createSales = async (body) => {
  // Conta todos os id's das vendas
  let listAllSales = await saleModel.findAllSales();
  
  // Soma mais 1
  listAllSales += 1;

  // Cria a venda
  saleModel.tableSales(listAllSales);
  await Promise.all(body.map((sale) => saleModel.addSales(listAllSales, sale)));
  const productsSold = await saleModel.productsSold(listAllSales);
};

module.exports = {
  createSales,
};