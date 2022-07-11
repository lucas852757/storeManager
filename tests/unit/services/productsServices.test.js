/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas*/

const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/ProductService");
const ProductModel = require("../../../models/ProductModel");

describe("services/productServices", () => {
  describe("getProductsById", () => {
    afterEach(sinon.restore);
    it("deve retornar um objeto", async () => {
      sinon.stub(ProductModel, "getProductsById").resolves([{}]);
      const response = await ProductService.listProductById(1);

      expect(response).to.be.an("object");
    });
  });
});
