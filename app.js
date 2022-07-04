const express = require('express');
const jsonwebtoken = require('jsonwebtoken');

//Controllers
const logar = require('./logar');
const logado = require('./logado');
const deslogar = require('./deslogar');
const cookieParser = require('cookie-parser');
var path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.listen(4000, () => 
console.log('Servidor iniciado na porta 4000')
);
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/portal',(req, res)=>{
    var dir = '/pages/examples/kanban.html'
    logado(req, res, dir);
});

app.post('/logar', async(req,res)=>{
    //res.send(await logar(req,res));
    console.log('Dentro do login');
    console.log(req.body.email);
    console.log(req.body.senha);
    var Token=  jsonwebtoken.sign(11, 'SenhaParaProtegerOToken');
    console.log(Token);
    res.cookie('Token', Token);
    res.redirect('/portal');
});

app.get('/',(req,res)=> res.sendFile(__dirname+'/pages/examples/login-v2.html'));

app.use(express.static(__dirname+'/plugins-dist'));