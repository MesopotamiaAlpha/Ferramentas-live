function updateData(){
    var rootRef = firebase.database().ref("cenaMaquiagem/");
    const newData = {
        nome: nome.value,
        tipo: tipo.value,
        marca: marca.value
    };
    rootRef.child(Index.value).update(newData);
    
}
