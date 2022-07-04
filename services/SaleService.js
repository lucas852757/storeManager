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

  if (!allSales.length) {
    const error = { status: 404, message: 'Sale not found' };
    throw error;
  }

  return allSales;
};

const getSale = async (id) => {
  const sale = await saleModel.getSale(id);

  if (!sale.length) {
    const error = { status: 404, message: 'Sale not found' };
    throw error;
  }
  return sale;
};

const deleteSale = async (id) => {
  const foundRegister = await saleModel.registerOfSale(id);

  if (!foundRegister.length) {
    const error = { status: 404, message: 'Sale not found' };
    throw error;
  }
  
  await saleModel.deleteSale(id);
};

const updateSale = async (id, body) => {
  const foundReginsterSale = await saleModel.registerOfSale(id);
  const foundProductId = await saleModel.findSalesProductId(id);
  console.log(foundProductId);
  
  // Identifica a lançao o erro para o Joi
  errorsOfJoi(body);
  
  // Não encontra product_id
  if (!foundProductId.length) {
    const dbError = { status: 404, message: 'Product not found' };
    throw dbError;
  }

  // Não encontra venda
  if (!foundReginsterSale.length) {
    const dbError = { status: 404, message: 'Sale not found' };
    throw dbError;
  }

  await Promise.all(body.map(async (sale) => { await saleModel.updateSalesProduct(id, sale); }));

  return { saleId: id, itemsUpdated: body };
};

module.exports = {
  createSales,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};