function email(serv){
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
        to: 'legalbot@almeidaenogueira.com.br', // receiver (use array of string for a list)
        subject: `Ocorreu um erro ao corrigir uma inconsistĂȘncia!`, // Subject line
        html: `<p>Um erro aconteceu ao tenter corrigir uma inconsistĂȘncia com o id ${serv} no Legal One,<br><br>favor analisar o erro e corrigir o problema,<br><br>Atenciosamente,<br><br>api do Legal Bot</p>`// plain text body
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
    