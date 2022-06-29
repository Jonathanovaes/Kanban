async function chantecler(){
  const email = require('./emails/emailLembrete')
  const email2 = require('./emails/emailLembrete2')
  const axios = require('axios');
  
    const response = await axios.get('https://api.thomsonreuters.com/legalone/oauth?grant_type=client_credentials',
    {
        auth: {
            username:'oT64oACKn6GF70uUdMHdsoFlAGlYyWKp',
            password:'GPAlcAz1g0uLG9fn'
        }
    })
    console.log(response.status);
    console.log(response.data);
    console.log(response.data.access_token);
    var cont = -7
    var hoje = new Date();
    var semanal = hoje.getDay();
    console.log(semanal)
    for(i=0;i<=7;i++){
    console.log(cont)
    var dtSemana = new Date();
    dtSemana.setDate(dtSemana.getDate()+cont);
    if(dtSemana.getMonth()+1<10){
      var mes = `0${dtSemana.getMonth()+1}`;
      console.log(mes);
    }
    if(dtSemana.getDate()<10){
      var dia = `0${dtSemana.getDate()}`;
    }else{
      var dia = dtSemana.getDate();
    }
    var pubDia = `${dtSemana.getFullYear()}-${mes}-${dia}`;
    console.log(pubDia);
    const response2 = await axios.get(`https://api.thomsonreuters.com/legalone/v1/api/rest/appointments/?$expand=status,participants($expand=Contact)&$filter=publishDate eq ${pubDia}Z`,
      {
          headers: {
              'Authorization' : `Bearer ${response.data.access_token}`
          }
      })
      try{
      console.log("total de resultados: "+ response2.data.value.length)
      var result = response2.data.value.length;
      for(c=0;c<result;c++){
      console.log("aqui: "+response2.data.value[c].id);
      var pub = response2.data.value[c].publishDate;
      //var pubDate = new Date(pub);
      console.log("aqui pub: "+pub)
      console.log('aqui status: '+ response2.data.value[c].status.description)
      var amanha = new Date()
      amanha.setDate(amanha.getDate()+1)
      var confirmar = false; //verifica se é final de semana amanhã
      if(semanal==5){
        confirmar = true;
        var amanha = new Date()
        amanha.setDate(amanha.getDate()+3);
      }
      var data = new Date(response2.data.value[c].endDateTime);
      console.log("enddate: "+response2.data.value[c].endDateTime)
      console.log(data.getDate())
      if(amanha.getDate()==data.getDate()&&amanha.getMonth()==data.getMonth()&&amanha.getFullYear()==data.getFullYear()&&response2.data.value[c].status.description=='Pendente'){
        console.log("dias iguais")
        console.log("amanhã"+amanha);
        console.log(response2.data.value[c])
        //console.log("participantes: "+ response2.data.value[c].participants[0].contact.name)
        if(confirmar==true){
        email2(response2.data.value[c]);}
        else{
        email(response2.data.value[c]);}
      }}
      cont= cont+1;
      console.log(cont)}catch{
      cont= cont+1;
      console.log(cont)}
    }
    
  return response;
  }

module.exports = chantecler;

//https://api.thomsonreuters.com/legalone/v1/api/rest/services?$expand=costCenters,customFields,participants
//https://api.thomsonreuters.com/legalone/v1/api/rest/tasks/?$expand=status&$filter=publishDate eq 2022-05-26Z
//${pubDia}