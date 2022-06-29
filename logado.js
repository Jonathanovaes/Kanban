const jsonwebtoken = require('jsonwebtoken');

async function logado(req, res, dir){
    //Pega os cookies do navegador
    console.log(req.cookies);
    Auth = req.cookies.Token || null;

    //Verifica se o cookie existe
    if(typeof(Auth)=='undefined' || Auth == '' || Auth == null){
        return res.send({ erro: {login: 'Não autorizado'}});
    }else{
        //Tenta traduzir
        try{
            //Se conseguir, autoriza o acesso
            console.log('Token criado!')
            Token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerOToken');
            console.log('depois da declaração')
            //next();
            //return res.send({valido: { login: 'autorizado'}})
            res.sendFile(__dirname+ dir);
        }catch(err){
            //Se não conseguir, bloqueia o acesso
            return res.send({erro: { login: 'Não autorizado'}});
        }
    }
}

module.exports = logado;