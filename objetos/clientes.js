var client = function cliente(a){
    const ids ={
        "CASA DI CONTI LTDA": 3138,
        "NOVA AMÉRICA AGRÍCOLA LTDA": 2760,
        "FUNDAÇÃO NOVA AMÉRICA": 3991,
        "NOVA AMÉRICA SERVIÇOS LTDA": 3992,
        "NOVA AMÉRICA TERRAS LTDA": 3826,
        "RRB EMPREENDIMENTOS E PARTICIPAÇÕES S/A": 3993,
        "RZ AGRÍCOLA CAARAPÓ LTDA": 3240,
        "GERALDO NÓBILE HOLZHAUSEN E OUTROS": 2870,
        "DESTILARIA ÁGUA BONITA LTDA": 2987,
        "AGRÍCOLA ÁGUA BONITA LTDA": 2871,
        "BRASINTER PRODUTOS QUÍMICOS LTDA": 3516,
        "TRANSBRASINTER TRANSPORTES RODOVIÁRIOS LTDA": 3513,
        "ASSOCANA - ASSOCIAÇÃO RURAL DOS FORNECEDORES E PLANTADORES DE CANA DA MÉDIA SOROCABANA": 7003,
        "BENCO - INDÚSTRIA E COMÉRCIO DE ESTAMPADOS EM AÇO - EIRELI": 3480,
        "VERA DE ANDRADE REIS KAPPAZ": 1647,
        "OLAM AGROINDUSTRIA EIRELI": 3135,
        "SÃO FERNANDO AGRÍCOLA E PASTORIL LTDA": 6570,
        "REZENDE BARBOSA S/A - ADMINISTRAÇÃO E PARTICIPAÇÕES": 3990,
        "ALBA INDÚSTRIA": 7502,
        "ALBA AGRÍCOLA": 7503
    }
    var id = ids[a];
    return id
}

module.exports = client;