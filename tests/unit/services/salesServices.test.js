const { expect } = require("chai");
const sinon = require("sinon");
const SaleService = require("../../../services/SaleService");
const SaleModel = require("../../../models/SaleModel");


describe("services/salesServices", () => {
  beforeEach(sinon.restore);

  describe("getSale", () => {
    it("deve retornar um objeto", async () => {
      sinon.stub(SaleModel, "getSale").resolves([{}]);
      const response = await SaleService.getSale(0);
      expect(response).to.deep.equal([{}]);
    });
  });
});