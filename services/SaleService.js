const Joi = require('joi');
const saleModel = require('../models/SaleModel');

const createSales = async (body) => {
  body.forEach(({ productId, quantity }) => {
   const schema = Joi.object({
     productId: Joi.number().not().empty().required(),
     quantity: Joi.number().min(1).greater(1).not().empty().required(),
   });
    const { error } = schema.validate({ productId, quantity });
   if (error) { throw error; }
  });
  // Conta todos os id's das vendas
  let listAllSales = await saleModel.findAllSales();
  
  // Soma mais 1
  listAllSales += 1;

  // Cria a venda
  saleModel.tableSales(listAllSales);
  await Promise.all(body.map((sale) => saleModel.addSales(listAllSales, sale)));
  // const productsSold = await saleModel.productsSold(listAllSales);
  return ({
    id: listAllSales,
    itemsSold: body,
  });
};

module.exports = {
  createSales,
};