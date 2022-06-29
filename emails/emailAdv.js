function email(serv,participante,id){
    let nodemailer = require ('nodemailer');
    (async()=>{
    let link = `https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${id}`
    let transporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
           user: 'legalbot@almeidaenogueira.com.br', 
           pass: 'aijtipcwmhrjmjdd' 
         } 
        });
    let adv = {"MARCUS VINICIUS FERREIRA DE RABELO ARRUDA": "marcusarruda@almeidaenogueira.com.br",
    "ANA GABRIELA DE GOES MONTAI": "gabrielamontai@almeidaenogueira.com.br",
    "GABRIELA DE ALMEIDA DOMINGUES QUINTEIRO": "gabrieladomingues@almeidaenogueira.com.br",
    "CARLOS EDUARDO RIBEIRO PUGLIEZI": "carlospugliezi@almeidaenogueira.com.br",
    "LUCAS CAVALCANTI DIAS PEREIRA": "lucaspereira@almeidaenogueira.com.br",
    "MARCELA BITTENCOURT DA SILVEIRA": "marcelabittencourt@almeidaenogueira.com.br",
    "ARIADNE FABIANE VELOSA CAVALCANTI": "ariadnecavalcanti@almeidaenogueira.com.br",
    "LUÍS FELIPE DE ALMEIDA PESCADA": "felipepescada@almeidaenogueira.com.br",
    "ANA CRISTINA MIGUEL": "anamiguel@almeidaenogueira.com.br",
    "FÁBIO LUIZ DA SILVA": "fabiosilva@almeidaenogueira.com.br",
    "EDUARDO DE OLIVEIRA PERES": "eduardoperes@almeidaenogueira.com.br",
    "ARTHUR BARBOSA SANCHES": "arthursanches@almeidaenogueira.com.br",
    "LUANA LOPES ESCOLAR": "luanaescolar@almeidaenogueira.com.br",
    "LUCAS CAMILO ALCOVA NOGUEIRA": "lucasnogueira@almeidaenogueira.com.br"
}
    var emailAdvg = adv[participante];
    const mailOptions = {
        from: 'legalbot@almeidaenogueira.com.br', // sender address
        to: `${emailAdvg}`, // receiver (use array of string for a list)
        subject: `Um novo serviço foi criado, e você é o(a) responsável por ele!`, // Subject line
        html: `<p>Um cliente solicitou um serviço e você é o(a) responsável por ele, está na pasta ${serv}.<br><br>Aqui está o link de atalho para o serviço criado: ${link}<br><br>Atenciosamente,<br><br>api do Legal Bot</p>`// plain text body
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