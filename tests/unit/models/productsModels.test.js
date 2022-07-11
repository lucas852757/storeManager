const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
/* https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas*/
const ProductModel = require('../../../models/ProductModel');

describe('models/ProductModel', () => {

  describe('getProductsById', () => {
    afterEach(connection.query.restore());
    /* it('dispara um erro se a "connection.query", dispara um erro', async () => {
      sinon.stub(connection, "query").rejects();

      const response = await  ProductModel.getProductsById(1);
      console.log(response);
      expect(response).to.be.frozen;
    } ) */
    it('retorna uma lista vazia', async () => { 
      sinon.stub(connection, "query").resolves([[]]);
      const response = await ProductModel.getProductsById(0);

      expect(response).to.be.empty;
    })

   
   });
  describe('quando o produto é encontrado', () => {
    it('retorna uma lista com um objeto', async () => {
      sinon.stub(connection, "query").resolves([[{}]]);
      const response = await ProductModel.getProductsById(0);
      expect(response).to.deep.include({});
     })
   });
});