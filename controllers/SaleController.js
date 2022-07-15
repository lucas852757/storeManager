const saleService = require('../services/SaleService');

const postSales = async (req, res, _next) => {
    const { body } = req;
    const sales = await saleService.createSales(body);
    // console.log(sales);
    return res.status(201).json(sales);
};

const getSales = async (req, res, _next) => {
    const sales = await saleService.getSales();
    return res.status(200).json(sales);
};

const getSale = async (req, res, _next) => {
    const { id } = await req.params;
    const sale = await saleService.getSale(id);
    return res.status(200).json(sale);
};

const deleteSale = async (req, res, _next) => {
    const { id } = req.params;
    await saleService.deleteSale(id);
    return res.status(204).end();
};

const updateSale = async (req, res, _next) => {
    const { id } = req.params;
    const { body } = req;
    const sale = await saleService.updateSale(id, body);
    return res.status(200).json(sale);
};

module.exports = {
  postSales,
  getSales,
  getSale,
  deleteSale,
  updateSale,
};