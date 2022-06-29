const api = require("./api");
const express = require("express");


const server = express();

server.use(express.json());

server.listen(8000);

server.get('/',(req,res)=>{
    return res.send({message: "Hello world!"});
});

server.get('/legal', async(req, res) =>{
    try {
        const{data} = await api.get();
        return res.send({message: "conectado"});
    } catch (error) {
        res.send({error: error.message});
    }
})