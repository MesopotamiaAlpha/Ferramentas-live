function deleteData(){
    var rootRef = firebase.database().ref("cenaMaquiagem/");

    rootRef.child(Index.value).remove();
    
}
