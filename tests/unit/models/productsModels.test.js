/*source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

source: https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii
*/

//Forarm resolvidas seguindo o exemplo do Professor Leandro

const sinon = require("sinon");
const chai = require("chai");
const chaiAsPromised = require('chai-as-promised');

const connection = require("../../../models/connection");

const ProductModel = require("../../../models/ProductModel");

chai.use(chaiAsPromised);

describe("models/ProductModel", () => {
  beforeEach(sinon.restore);

  describe("getProductsById", () => {
     it('dispara um erro se a "connection.query", dispara um erro', () => {
       sinon.stub(connection, "query").rejects();

      const response = ProductModel.getProductsById(1);
      // console.log(response);
       chai.expect(response).to.be.eventually.be.rejected;
    } )
    it("retorna uma lista vazia", () => {
      sinon.stub(connection, "query").resolves([[]]);
      const response = ProductModel.getProductsById(0);

      chai.expect(response).to.be.empty;
    });

    it("retorna uma lista com um objeto", () => {
      sinon.stub(connection, "query").resolves([[{}]]);
      const response = ProductModel.getProductsById(0);
      chai.expect(response).to.deep.include({});
    });
  });

  describe("getAllProducts", () => {
    it('dispara um erro se a "connection.query", dispara um erro', () => {
      sinon.stub(connection, "query").rejects();

      const response = ProductModel.getAllProducts();
      // console.log(response);
      chai.expect(response).to.be.eventually.be.rejected;
    });

     it("retorna uma lista vazia", () => {
       sinon.stub(connection, "query").resolves([[]]);
       const response = ProductModel.getAllProducts();

       chai.expect(response).to.eventually.be.undefined
     });

    it("retorna uma lista de produtos", () => {
      sinon.stub(connection, "query").resolves([[]]);
      const response = ProductModel.getAllProducts();

      chai.expect(response).to.eventually.be.deep.equal([]);
    });
  });
  describe('addProduct', () => {

     it('dispara um erro se a "connection.query", dispara um erro', () => {
       sinon.stub(connection, "query").rejects();

       const response = ProductModel.addProduct({});
       // console.log(response);
       chai.expect(response).to.be.eventually.be.rejected;
     });
    
    it('quando adicionado um produto, retorna um "id"', () => {
      sinon.stub(connection, "execute").resolves([{ insertId: 1}]);
      const response = ProductModel.addProduct();
      chai.expect(response).to.eventually.be.equal('number');
    });
  });
});
