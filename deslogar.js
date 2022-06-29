async function deslogar(res){
    //Limpa os cookies do navegador
    res.clearCookie('Token');
    res.redirect('/');
}

module.exports = deslogar;