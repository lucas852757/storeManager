// LQL
const express = require('express');
const productController = require('./controllers/ProductController');

const app = express();

app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

app.get('/products/:id', productController.getOneProduct);
app.get('/products', productController.getAllProducts);
module.exports = app;