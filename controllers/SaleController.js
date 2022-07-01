const saleService = require('../services/SaleService');

const postSales = async (req, res, next) => {
  try {
    const { body } = req;
    const sales = await saleService.createSales(body);
    console.log(sales);
    return res.status(201).json(sales);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  postSales,
};