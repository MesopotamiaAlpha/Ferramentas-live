

function writeData(){
    var Index = document.getElementById("Index").value
    firebase.database().ref("cenaMaquiagem/" + Index).set({
        tipo: document.getElementById("Tipo").value,
        nome: document.getElementById("Nome").value,
        marca: document.getElementById("Marca").value
    });
    getData();
}

function getData(){
    firebase.database().ref ('/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['tipo'] +", " + childData['nome']+ ", " + childData['marca'] ;
        })
    })
    
}

