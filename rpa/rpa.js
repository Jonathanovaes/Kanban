const playwright = require('playwright');
function auto(pub,nome,id){
  
 (async () => {
  const browser = await playwright['chromium'].launch({
    headless: false
  });
    var c = 0;
    try {
    //hoje == data da publicação
    var data = new Date();
    var hoje = new Date(pub);
    var prazoAn = new Date();
    if(hoje.getDate()<10){
        var hojeDia = '0'+hoje.getDate();
      }else{var hojeDia = hoje.getDate();}
      if(hoje.getMonth()+1<10){
        var hojeMes = hoje.getMonth()+1
        var mesHoje = '0'+hojeMes;
      }else{var mesHoje = hoje.getMonth()+1;}
    var diaAn = prazoAn.getDay();
    if(diaAn==1){
        prazoAn.setDate(prazoAn.getDate()+3);
      }
      if(diaAn ==0){
        prazoAn.setDate(prazoAn.getDate()+3);
      }
      if(diaAn ==2){
        prazoAn.setDate(prazoAn.getDate()+3);
      }
      if(diaAn ==3){
        prazoAn.setDate(prazoAn.getDate()+5);
      }
      if(diaAn ==4){
        prazoAn.setDate(prazoAn.getDate()+5);
      }
      if(diaAn ==5){
        prazoAn.setDate(prazoAn.getDate()+5);
      }
      if(diaAn ==6){
        prazoAn.setDate(prazoAn.getDate()+4);
      }
      if(prazoAn.getDate()<10){
        var anDia = '0'+prazoAn.getDate();
      }else{var anDia = prazoAn.getDate();}
      if(prazoAn.getMonth()+1<10){
        var anMes = prazoAn.getMonth()+1
        var mesAn = '0'+anMes;
      }else{var mesAn = prazoAn.getMonth()+1;}
    var diaSemana = data.getDay();
    if(diaSemana==1){
      data.setDate(data.getDate()+7);
    }
    if(diaSemana ==0){
      data.setDate(data.getDate()+5);
    }
    if(diaSemana ==2){
      data.setDate(data.getDate()+7);
    }
    if(diaSemana ==3){
      data.setDate(data.getDate()+7);
    }
    if(diaSemana ==4){
      data.setDate(data.getDate()+7);
    }
    if(diaSemana ==5){
      data.setDate(data.getDate()+7);
    }
    if(diaSemana ==6){
      data.setDate(data.getDate()+6);
    }
    console.log(data.getDate());
    console.log(data.getMonth()+1);
    console.log(data.getFullYear());
    if(data.getDate()<10){
      var dia = '0'+data.getDate();
    }else{var dia = data.getDate();}
    if(data.getMonth()+1<10){
      var dataMes = data.getMonth()+1
      var mes = '0'+dataMes;
    }else{var mes = data.getMonth()+1;}
  // Create a new incognito browser context
    const context = await browser.newContext();
  // Create a new page inside context.
    const page = await context.newPage();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos/editcompromisso/${id}?parentId=3282&tipoContexto=2&returnUrl=%2Fservicos%2Fservicos%2FDetailsCompromissosTarefas%2F3282%3Fajaxnavigation%3Dtrue%26renderOnlySection%3DTrue`);
    await page.locator('text=Nome de usuário Esqueceu o usuário?').click();
    await page.keyboard.type("AdminANadv");
    // Click .Password-wrap
    await page.locator('.Password-wrap').click();
    await page.keyboard.type("@Padre987#AN");
    // Click text=Legal One Firm Fazer login usando o OnePass Alterar opção de login Nome de usuár
    await page.locator('button:has-text("Log")').click();
    //await page.pause();
    // Click input[name="DtPublicacao"]
    await page.locator('input[name="DtPublicacao"]').fill(`${hojeDia}/${mesHoje}/${hoje.getFullYear()}`);
    // Click input[name="DtInicial"]
    await page.locator('input[name="DtInicial"]').fill(`${anDia}/${mesAn}/${prazoAn.getFullYear()}`);
    await page.locator('input[name="DtFinal"]').press('Tab');
    await page.locator('input[name="DtFinal"]').press('Tab');
    // Click div:nth-child(7) > .col > .label
    await page.locator('div:nth-child(7) > .col > .label').click();
    await page.keyboard.type(`${dia}/${mes}/${data.getFullYear()}`);
    //await page.pause();
    await page.locator('text=Salvar e fechar').click();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos`);
    
    await page.close();
    await context.close();
    await browser.close();
  } catch (err) {
    console.log("errooooooooooooooooooooooooooooo")
    c++
    await browser.close();
    if(c>2){
      console.log("enviar email do erro");
      let email = require('./falhaNaCorrecao');
      email(id);
    }else{
    auto(hoje,nome,id);}
}
})();
}
 //auto();
module.exports = auto;