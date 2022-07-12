/*source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

source: https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii
*/

const sinon = require("sinon");
const { expect } = require("chai");
const ProductController = require("../../../controllers/ProductController");
const ProductService = require("../../../services/ProductService");

describe("controllers/productsControllers", () => {
  beforeEach(sinon.restore);
  describe("getOneProduct", () => {
    const req = {};
    const res = {};

    req.params = {
      id: 1,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    /* it("em caso de sucesso, retorna um objeto", async () => {
      sinon.stub(ProductService, "listProductById").resolves({});
      await ProductController.getOneProduct(req, res);
      expect(res.json.getCall(0).args[0]).to.be.an("object");
    }); */

    it('em caso de sucesso, retorna um objeto com as proriedades "id" e "name"', async () => {
      sinon
        .stub(ProductService, "listProductById")
        .resolves({ id: 1, name: "Teclado" });
      await ProductController.getOneProduct(req, res);
      expect(res.json.getCall(0).args[0]).to.be.deep.equal({
        id: 1,
        name: "Teclado",
      });
    });

    it("em caso de sucesso, retorna status 200", async () => {
      sinon.stub(ProductService, "listProductById").resolves({});
      await ProductController.getOneProduct(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe("getAllProducts", () => {
    const req = {};
    const res = {};

    req.params = {
      id: 1,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    it('em caso de sucesso, retorna uma lista de objetos com as proriedades "id" e "name"', async () => {
      sinon
        .stub(ProductService, "listAllProducts")
        .resolves({ id: 1, name: "Teclado" });
      await ProductController.getAllProducts(req, res);
      expect(res.json.getCall(0).args[0]).to.be.deep.keys("id", "name");
    });

    it("em caso de sucesso, retorna status 200", async () => {
      sinon.stub(ProductService, "listAllProducts").resolves({});
      await ProductController.getOneProduct(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });
});
