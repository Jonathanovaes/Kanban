const express = require('express');
const axios = require('axios');
const app = express();
const chat = require('./testepost');
const bodyParser = require('body-parser');
app.listen(4000, () => 
console.log('Servidor iniciado na porta 4000')
);
const fs = require('fs');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log('Válido=========================================')
    var resul = chat();
    resul.then(total=>{
        console.log(total)
    });
    resul.then(total=>{
        res.send(total);
    });
})

app.get('/test', (req, res) => {
    res.end('encerrado post');
})

