const saleService = require('../services/SaleService');

const postSales = async (req, res, next) => {
  try {
    const { body } = req;
    const sales = saleService.createSales(body);
    return res.status(201).json(sales);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postSales,
};