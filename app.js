// LQL
// Baseado no course bloco 23
/**
 * source: https://app.betrybe.com/course/live-lectures/sd-cohort-19-b#aula-233-arquitetura-de-software-msc-and-restful
 */
const express = require('express');
require('express-async-errors');
const error = require('./middlewares/errorMiddleware');
const productController = require('./controllers/ProductController');
const saleController = require('./controllers/SaleController');

const app = express();

app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.get('/products/search', productController.selectProductsByName);

app.delete('/sales/:id', saleController.deleteSale);
app.delete('/products/:id', productController.deleteProduct);

app.put('/products/:id', productController.updateProduct);
app.put('/sales/:id', saleController.updateSale);

// Testado
app.get('/products/:id', productController.getOneProduct);
app.get('/products', productController.getAllProducts);

app.post('/products', productController.postProducts);
app.post('/sales', saleController.postSales);

// Testado
app.get('/sales/:id', saleController.getSale);
app.get('/sales', saleController.getSales);
app.use(error);
module.exports = app;