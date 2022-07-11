const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../../models/connection");

const SaleModel = require('../../../models/SaleModel');

describe("model/SaleModel", () => {
  beforeEach(sinon.restore);

  describe("getSale", () => {
       it("retorna uma lista vazia,quando não encontra avenda", async () => {
      sinon.stub(connection, "query").resolves([[]]);
      const response = await SaleModel.getSale();

      expect(response).to.be.empty;
       });
    
    it("quando encontra a venda, retorna uma lista de objetos com as vendas", async () => {
      sinon.stub(connection, "query").resolves([[{}]]);
      const response = await SaleModel.getSale(0);
      
      expect(response[0]).to.deep.keys('productId', 'quantity');
    });
  });
  describe("getSales", () => {

    it("retorna uma lista vazia,quando não encontra avenda", async () => {
      sinon.stub(connection, "query").resolves([[]]);
      const response = await SaleModel.getSales();

      expect(response).to.be.empty;
    });

    it('retorna todos os objetos com as vendas', async () => {
      sinon.stub(connection, "query").resolves([[{}]]);
      const response = await SaleModel.getSales();
      expect(response[0]).to.deep.keys("productId", "quantity");
    });
  });
});