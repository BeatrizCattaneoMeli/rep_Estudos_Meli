const express = require('express');
let products = require('./produtos');
const app = express();
//let produtos = require('./produtos');

app.use(express.json());


app.get('/products/:id/:nome?',(req, res) =>{
    const id = Number(req.params.id);
    const details = req.params.details || "Sem descrição";
    console.log(details);
    
    const nome = req.params.nome;
    console.log(nome);
    
    const product = products.find((produto) => produto.id === id)
    res.send(product);
});

app.post('/products', (req, res) => {
    const content = req.body;
    const newProduts = [...products, ...content]
    
    products = newProduts;
    
    res.status(201).json(products);
});

app.post('/products/criar', (req, res) => {
    console.log(req.body); // {produto: celular}
});

app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = req.body;
    
    let product = products.find((produto)=> produto.id === id);
    
    if(!product){
        return res.status(400).json({
            "mensagem":"Produto não encontrado"
        })
    }
    
    const produtoAtualizado = products.map((produto) => {
        if(produto.id === id){
            return content;
        }
        
        return produto;
    })
    
    products = produtoAtualizado;
    res.status(200).json(products);
})

app.delete('/products/:id', (req, res) =>{
    const id = Number(req.params.id);
    const product = products.find((produto) => produto.id === id);
    
    if(!product){
        return res.status(400).json({
            "mensagem":"Produto não encontrado"
        })
    }
    
    products = products.filter((produto) => produto.id !== id)
    
    res.status(200).json(products);
})

app.get('/products', (req, res) =>{
    // res.send('Rota de produtos');
    res.status(200).json(products);
});

app.listen(3001, () =>{
    console.log('Server is executing');
})
