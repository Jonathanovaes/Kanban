function email2(response){
    let nodemailer = require ('nodemailer');
    (async()=>{
    let link = `https://almeidaenogueira.novajus.com.br/agenda/compromissos/DetailsVinculos/${response.id}?renderOnlySection=True&returnUrl=%2Fprocessos%2Fprocessos%2FDetailsCompromissosTarefas%2F4796%3Fajaxnavigation%3Dtrue%26renderOnlySection%3DTrue`
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
    var confirm = 0;
    //var emailAdvg = adv[response.participants];
    for(i=0;i<response.participants.length;i++){
        if(response.participants[i].isResponsible==true){
            var nome = response.participants[i].contact.name;
            break;
        }
    }
    if(nome=="LUCAS CAVALCANTI DIAS PEREIRA"||nome=="CARLOS EDUARDO RIBEIRO PUGLIEZI"){
        var superior = "LUCAS CAMILO ALCOVA NOGUEIRA";
        confirm = 1;
    }
    
    if(nome=="ANA GABRIELA DE GOES MONTAI"||nome=="MARCUS VINICIUS FERREIRA DE RABELO ARRUDA"||nome=="GABRIELA DE ALMEIDA DOMINGUES QUINTEIRO"||nome=="MARCELA BITTENCOURT DA SILVEIRA"||nome=="ARIADNE FABIANE VELOSA CAVALCANTI"||nome=="ARTHUR BARBOSA SANCHES"){
        var superior = "ARTHUR BARBOSA SANCHES";
        var confirm = 1;
    }

    if(confirm==1){
    console.log("Superior: "+superior);
    const mailOptions = {
        from: 'legalbot@almeidaenogueira.com.br', // sender address
        to: [`${adv[nome]}`,`${adv[superior]}`], // receiver (use array of string for a list)
        subject: `Você tem um compromisso pendente para segunda!`, // Subject line
        html: `<p>Prezado(a) Advogado(a),<br><br>O compromisso com o id ${response.id}, com a descrição, ${response.description}, tem conclusão prevista para segunda.<br><br>Aqui está o link de atalho para o compromisso pendente: ${link}<br><br>Atenciosamente,<br><br>Legal Bot</p>`// plain text body
        };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err)
            console.log(err)
        else
            console.log(info);
        });
    }
    }
    
    )()
    }
    
    module.exports = email2;