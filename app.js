// LQL
// Baseado no course bloco 23

const express = require('express');
const rescue = require('express-rescue');
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

app.get('/products/search', rescue(productController.selectProductsByName));

app.delete('/sales/:id', rescue(saleController.deleteSale));
app.delete('/products/:id', rescue(productController.deleteProduct));

app.put('/products/:id', rescue(productController.updateProduct));
app.put('/sales/:id', rescue(saleController.updateSale));

// Testado
app.get('/products/:id', rescue(productController.getOneProduct));
app.get('/products', rescue(productController.getAllProducts));

app.post('/products', rescue(productController.postProducts));
app.post('/sales', rescue(saleController.postSales));

// Testado
app.get('/sales/:id', rescue(saleController.getSale));
app.get('/sales', rescue(saleController.getSales));
app.use(error);
module.exports = app;