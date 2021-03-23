function updateData(){
    var rootRef = firebase.database().ref("cenaMaquiagem/");
    const newData = {
        nome: nome.value
    };
    rootRef.child(Index.value).update(newData);
}
