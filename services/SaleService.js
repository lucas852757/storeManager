const { errorsOfJoi } = require('../helpers/helpersJoi');
const saleModel = require('../models/SaleModel');
const productModel = require('../models/ProductModel');

const createSales = async (body) => {
  // Captura e lanaça erros
  errorsOfJoi(body);
  // Verifica se o campo product_id existe na tabela products
  
  const valuesPromises = body.map(async ({ productId }) => {
    const foundProduct = await productModel.findProduct(productId);
  // console.log(foundProduct);
    if (!foundProduct.length) {
      const error = { status: 404, message: 'Product not found' };
      throw error;
    }
  });
  await Promise.all(valuesPromises);
  // Conta todos os id's das vendas
  let listAllSales = await saleModel.findAllSales();
  
  // Soma mais 1
  listAllSales += 1;

  // Cria a venda
  saleModel.tableSales(listAllSales);
  await Promise.all(body.map((sale) => saleModel.addSales(listAllSales, sale)));
  const productsSold = await saleModel.productsSold(listAllSales);
  return ({ id: listAllSales, itemsSold: productsSold });
};

const getSales = async () => {
  const allSales = await saleModel.getSales();
  return allSales;
};

const getSale = async (id) => {
  const sale = await saleModel.getSale(id);
  return sale;
};

module.exports = {
  createSales,
  getSales,
  getSale,
};