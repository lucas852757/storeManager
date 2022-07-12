/*source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-i

source: https://app.betrybe.com/course/live-lectures/sd-cohort-17#aula-234-arquitetura-de-software-testando-camadas

source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#momento-bonus-do-zero-ao-setup-do-msc-testes-ii
*/
const { expect } = require("chai");
const sinon = require("sinon");
const SaleService = require("../../../services/SaleService");
const SaleModel = require("../../../models/SaleModel");

describe("services/salesServices", () => {
  beforeEach(sinon.restore);

  describe("getSale", () => {
    it("deve retornar uma lista com objeto", async () => {
      sinon.stub(SaleModel, "getSale").resolves([{}]);
      const response = await SaleService.getSale(0);

      expect(response).to.deep.equal([{}]);
    });

    it("deve retornar uma lista de objetos", async () => {
      sinon.stub(SaleModel, "getSales").resolves([{}]);
      const response = await SaleService.getSales();

      expect(response).to.deep.equal([{}]);
    });
  });
});
