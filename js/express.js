var express = require('express');
var app = express();
var teste = require('./connect-db');

app.get("/", function (reg, res){



})


app.listen(3000,function(){
    console.log("Executando");
})