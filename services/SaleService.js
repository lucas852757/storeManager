const createSales = async (body) => {
  await Promise.all(body.map((sale) => saleModel.addSales(sale)));
};

module.exports = {
  createSales,
};