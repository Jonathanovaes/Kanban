function email(dataP,date,nescessidade,solicitant,departament,comment,type,participante,cliente){
    let nodemailer = require ('nodemailer');
    (async()=>{
    let transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
           user: 'legalbot@almeidaenogueira.com.br', 
           pass: 'aijtipcwmhrjmjdd' 
         } 
        });
    
    const mailOptions = {
        from: 'legalbot@almeidaenogueira.com.br', // sender address
        to: `legalbot@almeidaenogueira.com.br`, // receiver (use array of string for a list)
        subject: `Ocorreu um erro ao cadastrar um serviço no Legal One`, // Subject line
        html: `<p>Um erro aconteceu ao criar um serviço no Legal One,<br><br>favor analisar o erro e corrigir o problema,<br><br>Segue abaixo as informações do serviço que seria criado:<br><br>${dataP},<br>${date},<br>${nescessidade},<br>${solicitant},<br>${departament},<br>${comment},<br>${type},<br>${participante},<br>${cliente}.<br><br>Atenciosamente,<br><br>api do Legal Bot</p>`// plain text body
        };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else
            console.log(info);
        });
    })()
    }
    
    module.exports = email;