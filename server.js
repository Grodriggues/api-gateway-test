const express = require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res) =>{
    res.send({
        func:true
    })
})

app.get("/:id",(req,res) =>{
    res.send({
        func:req.params.id
    })
})


app.post("/",(req,res) =>{
    res.send({
        func:req.body
    })
})


app.listen(3000)