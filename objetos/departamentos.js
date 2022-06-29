let depar = function departament(a){
    const ids = {
        'Administrativo': 44,
        'Comercial': 1,
        'Compras' : 41,
      'Contabilidade' : 2,   
       'Controladoria' :3,
        'Departamento Pessoal': 45,
         'Diretoria' : 4,
        'Documentação' :46,
        'Financeiro' : 5,
        'Fiscal' : 16,
        'Jurídico' : 8,
       'Logística': 17,
        'Marketing': 9,
        'Qualidade e Meio Ambiente': 47,
        'Recursos humanos': 6,
       'Saúde Ocupacional': 48,
        'Segurança do Trabalho': 49,
        'Supply Chain': 7,
        'Sustentabilidade': 50,
        'Tecnologia da Informação': 10
    }
    var id = ids[a];
    return id;
}

module.exports = depar;