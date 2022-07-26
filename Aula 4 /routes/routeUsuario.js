const express = require('express');
const routes = express.Router();
let usuarios = require('../usuario');

//puxar usuarios
routes.get('/', (req, res) => {
    return res.status(200).send('Oi!')
})

//adicionar usuario
routes.post('', (req, res) =>{
    const content = req.body;
    const newUser = [...usuarios, content];

    usuarios = newUser;

    res.status(201).json(usuarios);
}) 

//atulizar usuario
routes.put('/:email', (req, res) =>{
    const email = req.params.email;
    let usuario = usuarios.find((usuarios) =>{
        usuario.email === email;
    })

    if(email){
        usuarios = usuarios.filter((usuario) => usuario.username !== username)
        res.status(200).json(usuarios);
    }
    else{
        return res.status(400).json({"message": "Usuário não encontrado"})
    }
})


//deletar usuario
routes.delete('/:username', (req, res) => {
    const username = req.params.username;
    let usuario = usuarios.find((usuario) => usuario.username === username);

    if(!usuario){
        usuarios = usuarios.filter((usuario) => usuario.username !== username)
        res.status(200).json(usuarios);
    } 
    else{
        return res.status(400).json({"message": "Usuario não encontrado"})
    }

})

module.exports = routes;