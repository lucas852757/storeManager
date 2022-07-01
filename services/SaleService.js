const { errorsOfJoi } = require('../helpers/helpersJoi');
const saleModel = require('../models/SaleModel');

const createSales = async (body) => {
  // Captura e lanaça erros
  errorsOfJoi(body);
  // Verifica se o campo product_id existe na tabela products
  body.forEach(({ productId }) => {
    const foundProduct = saleModel.findProduct(productId); 
    if (!foundProduct.length) {
      const error = { status: 404, message: 'Product not found' };
      throw error;
    }
});
  // Conta todos os id's das vendas
  let listAllSales = await saleModel.findAllSales();
  
  // Soma mais 1
  listAllSales += 1;

  // Cria a venda
  saleModel.tableSales(listAllSales);
  await Promise.all(body.map((sale) => saleModel.addSales(listAllSales, sale)));
  // const productsSold = await saleModel.productsSold(listAllSales);
  return ({ id: listAllSales, itemsSold: body });
};

module.exports = {
  createSales,
};