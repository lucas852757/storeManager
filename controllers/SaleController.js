const saleService = require('../services/SaleService');

const postSales = async (req, res, next) => {
  try {
    const { body } = req;
    const sales = await saleService.createSales(body);
    // console.log(sales);
    return res.status(201).json(sales);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSales = async (req, res, next) => {
  try {
    const sales = await saleService.getSales();
    return res.status(200).json(sales);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSale = async (req, res, next) => {
  try {
    const { id } = await req.params;
    const sale = await saleService.getSale(id);
    return res.status(200).json(sale);
} catch (error) {
  console.log(error);
  next(error);
}
};

const deleteSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    await saleService.deleteSale(id);
    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  postSales,
  getSales,
  getSale,
  deleteSale,
};