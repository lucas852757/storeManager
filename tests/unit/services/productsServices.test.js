/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii*/

const { expect } = require("chai");
const sinon = require("sinon");
const Joi = require('joi');
const ProductService = require("../../../services/ProductService");
const ProductModel = require("../../../models/ProductModel");
const { runSchema } = require("../../../utils/runSchema");

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
  
  // Terminar
  // describe('createProduct', () => {
  //   it('valida se Joi dispara um erro',  () => {
  //     const schema = {
  //       validate: sinon.stub().rejects(),
  //     }
  //     //console.log(runSchema(schema)[0]);
  //     expect(runSchema(schema)[0]).to.be.equal(undefined);
  //   });

  //   it.('quando não existe erros de validação', () => {
  //     const schema = {
  //       validate: sinon.stub().resolves({a:''}),
  //     };
  //    // console.log(runSchema(schema)[0]);
  //    // expect(runSchema(schema)[0]).to.be.equal({});
  //   });
  // });
});
