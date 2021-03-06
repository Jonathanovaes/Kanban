function email(serv,participante,cliente){
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
        to: `${cliente}`, // receiver (use array of string for a list)
        subject: `Seu serviço foi criado com sucesso!`, // Subject line
        html: `<p>Prezado(a),<br><br>Seu serviço foi criado com sucesso e está na pasta ${serv}, e o(a) responsável por ele logo será definido pelo advogado chefe, e então você receberá um email informando o advogado(a) responsável.<br><br>Por favor aguarde nosso retorno sobre o serviço criado<br><br>Atenciosamente,<br><br>api do Legal Bot</p>`// plain text body
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