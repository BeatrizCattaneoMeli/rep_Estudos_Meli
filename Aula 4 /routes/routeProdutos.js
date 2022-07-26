const express = require('express');
const products = require('../produtos');
const routes = express.Router();

let produtos = require('../produtos');

function validateExist(req, res, next){
    const id = Number(req.params.id);
    const existId = products.find((produto)=>{
        produto.id === id;
    });

    // evitar usar negacao, pessoas nao pensam o contrario com naturalidade
    if(existId){
        next();
    }
    else{
        return res.status(400).json({"messagem": "Produto nao encontrado"});
    }
}

function validatePrice(req, res, next) {
    const { price } = req.body;

    if (price && price >= 0) {
        next();
    }

    return res.status(400).send('Produto com preço invalido');
}

routes.get('/', (req, res) => {
    res.status(200).json(produtos);
});

routes.get('/:id', validateExist, (req, res) =>{
    const id = Number(req.params.id);
    const product = products.filter((produto) => produto.id === id);
    
    return res.status(200).json(products);
})

routes.post('/', validatePrice, (req, res) => {
    const content = req.body;
    const newProducts = [...products, ...content];

    return res.status(201).json(products);
})


routes.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;
    const product = produtos.find((produto) => produto.id === id);

    if (!product) {
        return res.status(400).json({ "message": "Produto não encontrado" })
    }

    const produtoAtualizado = produtos.map((produto) => {
        if (produto.id === id) {
            return content;
        }

        return produto;
    })

    produtos = produtoAtualizado;

    res.status(200).json(produtos);
})

routes.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = produtos.find((produto) => produto.id === id);

    if (!product) {
        return res.status(400).json({ "message": "Produto não encontrado" })
    }

    produtos = produtos.filter((produto) => produto.id !== id);

    return res.status(200).json(produtos);
})

module.exports = routes;