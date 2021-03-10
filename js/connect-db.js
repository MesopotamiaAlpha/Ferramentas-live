var mongoose = require('mongoose');

//Configurando o mongoose para conectar com comandos adicionais para erro
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/live').then(() => {
console.log("conectado ao banco de dados mongodb");
}).catch((err)=>{
    console.log("Houve um erro: " +err);
});


//teste de gravação de dados, e desta forma esta gravando corretamente
var nomeSalvar = mongoose.model('nomes', {nome: String});
var salvarDb = new nomeSalvar({nome: 'djzefx'});
salvarDb.save(function (err) {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
});