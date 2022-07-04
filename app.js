// LQL
// Baseado no course bloco 23

const express = require('express');
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

app.delete('/sales/:id', saleController.deleteSale);
app.delete('/products/:id', productController.deleteProduct);

app.put('/products/:id', productController.updateProduct);
app.put('sales/:id');

app.get('/products/:id', productController.getOneProduct);
app.get('/products', productController.getAllProducts);

app.post('/products', productController.postProducts);
app.post('/sales', saleController.postSales);

app.get('/sales/:id', saleController.getSale);
app.get('/sales', saleController.getSales);
app.use(error);
module.exports = app;