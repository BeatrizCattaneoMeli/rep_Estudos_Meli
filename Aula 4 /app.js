const express = require('express');
const app = express();

const rotaProdutos = require('./routes/routeProdutos')
const rotaUsuarios = require('./routes/routeUsuario')

app.use(express.json());

app.use('/produtos', rotaProdutos);
app.use('/user', rotaUsuarios);

app.use((req, res, next) => {
    res.status(404).send('Erro 404, not found');

    next();
})

app.listen(3001, () => {
    console.log('Servidor online');
})