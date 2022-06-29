async function cler(){
    const axios = require('axios');
    const body = {
      'user': 'AlmeidaSystem',
      'password': 'jzZT9&b3HrMKa@^MK8dIZmWjgMeZDdWS2Q$EBqcfwGl9qnE0Vv',
      'email': `legalbot@almeidaenogueira.com.br`,
      'solicitante':  `ABILIO NOGUEIRA DUARTE NETO`,
      'tipo':  `Acompanhamento (Solicitar acompanhamento do cliente em órgãos públicos)`,
      'preciso':  `preciso de um acompanhamento para ...`,
      'prioridade':  `URGENTE - entrega em até 01 dia`,
      'natureza': `EMPRESARIAL (Quaisquer outros serviços que não seja natureza Trabalhista)`,
      'departamento':  `Controladoria`,
      'comentario':  ``,
      'cliente': 'CASA DI CONTI LTDA',
    }
    const response = await axios.get('http://localhost:4000/')
  }

  cler();