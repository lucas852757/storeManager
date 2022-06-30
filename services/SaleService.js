const saleModel = require('../models/SaleModel');

const createSales = async (body) => {
  // Conta todos os id's das vendas
  let listAllSales = saleModel.findAllSales();

  await Promise.all(body.map((sale) => saleModel.addSales(sale)));
};

module.exports = {
  createSales,
};