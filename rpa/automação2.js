const playwright = require('playwright');
function auto(id,c,serv,nome){
  console.log(nome);
 (async () => {
  const browser = await playwright['chromium'].launch({
    headless: false
  });
    var nid = id;
    try {
    //calcula as datas dos prazos corretamente
    var data = new Date();
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
    console.log(`nid: T(${typeof nid}) v(${nid})`)
    console.log(`id: T(${typeof id}) v(${id})`)
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
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${nid}`);
    await page.locator('text=Nome de usuário Esqueceu o usuário?').click();
    await page.keyboard.type("AdminANadv");
    // Click .Password-wrap
    await page.locator('.Password-wrap').click();
    await page.keyboard.type("@Padre987#AN");
    // Click text=Legal One Firm Fazer login usando o OnePass Alterar opção de login Nome de usuár
    await page.locator('button:has-text("Log")').click();
    //await page.pause();
    // Click text=Comunicado Legal OnePrezado usuário do Legal One, Conforme comunicado divulgado  >> button >> nth=1
  await page.locator('text=Comunicado Legal OnePrezado usuário do Legal One, Conforme comunicado divulgado  >> button').nth(1).click();
  // Click #c4037399-6ed2-89d3-142b-de1110682cb4
  await page.locator('#c4037399-6ed2-89d3-142b-de1110682cb4').click();
  // Click button >> nth=3
  await page.locator('button').nth(3).click();
    // Click input[name="DescricaoDoServico"]
    await page.locator('input[name="DescricaoDoServico"]').click();
    // Press Tab
    await page.locator('input[name="DescricaoDoServico"]').press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(`${nome}`);
    await page.keyboard.press('Enter',{delay: 1000});
    await page.keyboard.press('Enter',{delay: 1000});
    await page.locator('text=Personalizados').click();
    await page.locator(`#Workflow_ServicoEntitySchema_p5076_o${nid}_Lookup div`).nth(3).click();
    await page.locator('text=Serviço via SSJ').click();
    // Click text=Salvar e fechar
    await page.locator('text=Salvar e fechar').click();
    // assert.equal(page.url(), 'https://almeidaenogueira.novajus.com.br/servicos/Servicos/search');
    //page.locator('#menuhome a').click()
    //await page.pause();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${nid}`)
    //await page.pause();
    await page.locator(`input[name="Workflow_ServicoEntitySchema_p5076_o${nid}\\.Value"]`).click();
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.locator('text=Salvar e fechar').click();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${nid}`);
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos/createfromservico/${nid}`);
    //await page.pause();
    await page.locator('.child-panel tbody tr .xx-large').click();
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.keyboard.type(`${nome}`);
    await page.keyboard.press('Enter',{delay: 1000});
    await page.keyboard.press('Enter',{delay: 1000});
     // Click input[name="Descricao"]
    await page.locator('input[name="Descricao"]').click();
    // Fill input[name="Descricao"]
    await page.locator('input[name="Descricao"]').fill('');
    // Fill input[name="Descricao"]
    await page.locator('input[name="Descricao"]').fill('Entregar Serviço');
    // Click #lookup_tipo div >> nth=3
    await page.locator('#lookup_tipo div').nth(3).click();
    // Click #tipo_2 span
    await page.locator('#tipo_2 span').click();
    // Click text=Prazo - Serviços
    await page.locator('text=Prazo - Serviços').click();
    //await page.pause();
    // Click input[name="DtInicial"]
    await page.locator('input[name="DtInicial"]').click();
    // Press Tab
    await page.locator('input[name="DtInicial"]').press('Tab');
    // Press Tab
    await page.locator('input[name="HrInicio"]').press('Tab');
    // Click input[name="DtFinal"]
    await page.locator('input[name="DtFinal"]').click();
    // Press Tab
    await page.locator('input[name="DtFinal"]').press('Tab');
    // Click text=Justificativa 1 Justificativa 2 Preenchimento exclusivo da Controladoria Advogad >> img[alt="\.\.\."]
    //await page.locator('text=Justificativa 1 Justificativa 2 Preenchimento exclusivo da Controladoria Advogad >> img[alt="\\.\\.\\."]').click();
    // Click input[name="PrazoLegal_CompromissoEntitySchema_p3634_o"]
    await page.locator('input[name="PrazoLegal_CompromissoEntitySchema_p3634_o"]').click()
    await page.keyboard.type(`${dia}/${mes}/${data.getFullYear()}`);
    //await page.locator('input[name="PrazoLegal_CompromissoEntitySchema_p3634_o"]').fill(`${dia}/${mes}/${data.getFullYear()}`);
    await page.locator('text=Salvar e fechar').click();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos`);
    //await page.pause();
    //recarregar
    //zerar
    //salvar e fechar
    await page.close();
    await context.close();
    await browser.close();
  } catch (err) {
    console.log("errooooooooooooooooooooooooooooo")
    c++
    await browser.close();
    if(c>2){
      console.log("enviar email do erro");
      let email = require('./email');
      email(serv);
    }else{
    auto(nid,c,serv,nome);}
}
})();
}
  //auto(3404, 0 );
  //await page.locator('text=Salvar e fechar').click(); //clica em salvar
  module.exports = auto;
  /*await page.locator('.child-panel tbody tr .xx-large').click();
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  await page.keyboard.type(`${nome}`);
  // Click input[name="DescricaoDoServico"]
  await page.locator('input[name="DescricaoDoServico"]').click();
  // Press Tab
  await page.locator('input[name="DescricaoDoServico"]').press('Tab');*/