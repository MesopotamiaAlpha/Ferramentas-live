function getData(){
    firebase.database().ref ('cenaMaquiagem/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['tipo'] +", " + childData['nome']+ ", " + childData['marca'] ;
        })
    })
    
}