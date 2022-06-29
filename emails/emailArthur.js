function email(link, chefe){
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
        to: `${link}`, // receiver (use array of string for a list)
        subject: `Um novo serviço foi solicitado por um cliente!`, // Subject line
        html: `<p>Prezado ${chefe}, <br><br>Uma nova solicitação de serviço chegou de um cliente,<br><br>favor analisar e escolher quem é o melhor advogado(a) para ele.<br><br>Segue o link de atalho para o portal de edição de serviços: https://adc2-179-174-56-153.sa.ngrok.io/portal.<br><br>Atenciosamente,<br><br>api do Legal Bot</p>`// plain text body
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