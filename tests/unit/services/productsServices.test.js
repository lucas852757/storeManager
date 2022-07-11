/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii*/

const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/ProductService");
const ProductModel = require("../../../models/ProductModel");

describe("services/productServices", () => {
  
  beforeEach(sinon.restore)

  describe("getProductsById", () => {

    it("deve retornar um objeto", async () => {
      sinon.stub(ProductModel, "getProductsById").resolves([{}]);
      const response = await ProductService.listProductById(1);

      expect(response).to.be.an("object");
    });
  });

  describe('listAllProducts', () => {
    it("retorna uma lista de produtos", async () => {
      sinon.stub(ProductModel, "getAllProducts").resolves([]);
      const response = await ProductService.listAllProducts();

      expect(response).to.be.deep.equal([]);
    });
  });
  
});
