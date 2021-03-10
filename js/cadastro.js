//teste de gravação de dados, e desta forma esta gravando corretamente
var nomeSalvar = mongoose.model('nomes', {nome: String});
var salvarDb = new nomeSalvar({nome: 'djzefx'});
salvarDb.save(function (err) {
    if (err) throw err;
    console.log('Dados salvos com sucesso!');
});