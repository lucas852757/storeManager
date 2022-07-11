const sinon = require("sinon");
const { expect } = require("chai");
const SaleController = require("../../../controllers/SaleController");
const SaleService = require("../../../services/SaleService");

describe('controllers/SalesControllers', () => {
  beforeEach(sinon.restore);

  const req = {};
  const res = {};

  req.params = {
    id: 1,
  };
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns();

  describe('getSale', () => {
    it('em caso de sucesso, retorna um objeto com as proriedades "saleId", "date", "productId" e "quantity"', async () => {
      sinon.stub(SaleService, "getSale").resolves({
        saleId: 1,
        date: "2022-07-11T08:31:08.000Z",
        productId: 1,
        quantity: 5,
      });
      await SaleController.getSale(req, res);
      expect(res.json.getCall(0).args[0]).to.be.deep.keys(
        "saleId",
        "date",
        "productId",
        "quantity"
      );
    });
  });
  describe('getSales', () => {
    it.only('em caso de sucesso, retorna um objeto com as proriedades "saleId", "date", "productId" e "quantity"', async () => {
      sinon.stub(SaleService, "getSales").resolves({
        saleId: 1,
        date: "2022-07-11T08:31:08.000Z",
        productId: 1,
        quantity: 5,
      });
      await SaleController.getSales(req, res);
      expect(res.json.getCall(0).args[0]).to.be.deep.keys(
        "saleId",
        "date",
        "productId",
        "quantity"
      );
    });
  });
});
