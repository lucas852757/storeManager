/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii

https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-234-arquitetura-de-software-testando-as-camadas*/

// lecture/23.4
const sinon = require("sinon");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

const Joi = require('joi');
const ProductService = require("../../../services/ProductService");
const ProductModel = require("../../../models/ProductModel");
const { runSchema } = require("../../../utils/runSchema");


chai.use(chaiAsPromised);

describe("services/productServices", () => {
  
  beforeEach(sinon.restore)

  describe("getProductsById", () => {

    it('quando "getProductId" responde com um erro', () => {
      sinon.stub(ProductModel, 'getProductsById').rejects();

      const response = ProductModel.getProductsById(1);
      chai.expect(response).to.eventually.be.rejected;
    });

    it("deve retornar um objeto", () => {
      sinon.stub(ProductModel, "getProductsById").resolves([{}]);
      const response = ProductService.listProductById(1);

      chai.expect(response).to.eventually.be.equal("object");
    });
  });

  describe('listAllProducts', () => {
    it('quando "listAllProducts" responde com um erro', () => {
      sinon.stub(ProductModel, "getProductsById").rejects();

      const response = ProductService.listAllProducts();
      chai.expect(response).to.eventually.be.rejected;
    });
    it("retorna uma lista de produtos", () => {
      sinon.stub(ProductModel, "getAllProducts").resolves([]);
      const response = ProductService.listAllProducts();

      chai.expect(response).to.eventually.be.deep.equal([]);
    });
  });
  
  // Terminar
   describe('createProduct', () => {
  it('valida se Joi dispara um erro',  () => {
  const schema = {
    validate: sinon.stub().rejects(),
  };
    // console.log(runSchema(schema)[0]);
    chai.expect(runSchema(schema)()).to.eventually.be.rejected;
  });

  it('quando não existe erros de validação', () => {
  const schema = {
  validate: sinon.stub().resolves(''),
  };
  // console.log(runSchema(schema)[0]);
  chai.expect(runSchema(schema)()).to.eventually.be.equal('')
  });
  });
});
