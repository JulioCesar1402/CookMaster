const express = require('express');
const userRoutes = require('../routes/userRoutes');
const loginRoutes = require('../routes/loginRoutes');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', userRoutes);
app.use('/login', loginRoutes);

module.exports = app;
