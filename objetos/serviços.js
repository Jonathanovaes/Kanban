let servico = function tipo(a){
    const tipos = {
        'Acompanhamento (Solicitar acompanhamento do cliente em órgãos públicos)': 97,
        'Contrato (Fazer ou analisar contrato)': 3,
        'Defesa': 53,
        'Documento (Elaborar qualquer que não sejam contrato e notificação)': 56,
        'Holding': 155,
        'Interno' : 147,
        'LGPD': 156,
        'Notificação (Fazer ou responder uma notificação extrajudicial)': 52,
        'Ofício (Responder um ofício da Justiça que solicitou alguma informação da empresa)': 45,
        'Parecer (Questionamento, dúvida sobre assuntos jurídicos)': 102,
        'Relatório (Solicitar relatório personalizado)': 46,
        'Due Diligence': 159
    }
    var serv = tipos[a]
    return serv;
}

module.exports = servico;