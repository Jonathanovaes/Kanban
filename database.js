var Sequelize = require('sequelize');

var connection = new Sequelize('administrador','root','@Nogueira987#',{
    dialect: "mysql",
    host: 'localhost',
});

/*connection.sync().then(function(){
    pessoas.create({
        nome: 'Ana',
        email: '555778@gmail.com',
        senha: '808081',
        nivel: 'Administrador'
    })
});*/
/*var pessoas = connection.define('pessoas2s',{
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
    nivel: Sequelize.ENUM('Administrador','Usuário')
});*/

module.export = connection;