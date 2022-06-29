const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(5000,()=>{
    console.log('servidor executado na porta 5000')
});

app.post('/',(req,res)=>{
    console.log(req.body[0])
    res.send(200);
})