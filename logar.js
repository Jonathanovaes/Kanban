const jsonwebtoken = require('jsonwebtoken');

async function logar(req,response){

    var id = req;
    console.log('id: '+id);
    Token=  jsonwebtoken.sign({id}, 'SenhaParaProtegerOToken');
    console.log(Token);
    //response.cookie('Token', Token);
    //response.cookie('Token2', 'teste');
    response.sendStatus(200);
}

module.exports = logar