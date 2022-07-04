
var prior = new Date();
prior.setDate(prior.getDate()+7);
var dateP = `${prior.getFullYear()}-${prior.getMonth()+1}-${prior.getDate()}`
if(prior.getDate()<30){
    console.log('0'+prior.getDate())
}
console.log(`${dateP}`);


      