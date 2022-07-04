const playwright = require('playwright');
function auto(id,c,serv){
 (async () => {
  const browser = await playwright['chromium'].launch({
    headless: false
  });
    var nid = id;
    try {
    console.log(`nid: T(${typeof nid}) v(${nid})`)
    console.log(`id: T(${typeof id}) v(${id})`)
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
    //await page.locator('text=Personalizados').click();
    //await page.locator(`#Workflow_ServicoEntitySchema_p5076_o${nid}_Lookup div`).nth(3).click();
    //await page.locator('text=Serviço via SSJ').click();
    // Click text=Salvar e fechar
    //await page.locator('text=Salvar e fechar').click();
    // assert.equal(page.url(), 'https://almeidaenogueira.novajus.com.br/servicos/Servicos/search');
    //page.locator('#menuhome a').click()
    //await page.pause();
    //await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${nid}`)
    //await page.pause();
    /*await page.locator(`input[name="Workflow_ServicoEntitySchema_p5076_o${nid}\\.Value"]`).click();
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');
    await page.keyboard.press('Backspace');
    await page.locator('text=Salvar e fechar').click();
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/servicos/edit/${nid}`);*/
    await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos/createfromservico/3189`);
    await page.pause();
  // Click .child-panel tbody tr .xx-large
  await page.locator('.child-panel tbody tr .xx-large').click();
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  await page.keyboard.type("LUCAS CAVALCANTI DIAS PEREIRA");
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
     // Click input[name="Descricao"]
  await page.locator('input[name="Descricao"]').click();
  // Fill input[name="Descricao"]
  await page.locator('input[name="Descricao"]').fill('');
  // Fill input[name="Descricao"]
  await page.locator('input[name="Descricao"]').fill('Entregar Serviço');
  await page.pause();
  // Click #lookup_tipo div >> nth=3
  await page.locator('#lookup_tipo div').nth(3).click();
  // Click #tipo_2 span
  await page.locator('#tipo_2 span').click();
  // Click text=Prazo - Serviços
  await page.locator('text=Prazo - Serviços').click();
  // Click text=Justificativa 1 Justificativa 2 Preenchimento exclusivo da Controladoria Advogad >> img[alt="\.\.\."]
  await page.locator('text=Justificativa 1 Justificativa 2 Preenchimento exclusivo da Controladoria Advogad >> img[alt="\\.\\.\\."]').click();
  // Click input[name="PrazoLegal_CompromissoEntitySchema_p3634_o"]
  await page.locator('input[name="PrazoLegal_CompromissoEntitySchema_p3634_o"]').fill("27/04/2022"); 
  await page.pause();
  await page.locator('text=Salvar e fechar').click();
  await page.goto(`https://almeidaenogueira.novajus.com.br/servicos/compromissos`);
  // assert.equal(page.url(), 'https://almeidaenogueira.novajus.com.br/servicos/compromissotarefa/Search');
  //await page.pause();
  // assert.equal(page.url(), 'https://almeidaenogueira.novajus.com.br/servicos/compromissos/createfromservico/3189');
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
    auto(nid,c);}
}
})();
}

auto(3404,0);