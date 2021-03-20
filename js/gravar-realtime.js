

function writeData(){
    firebase.database().ref("usuario").set({
        nome: document.getElementById("Nome").value,
        sobre: document.getElementById("SobreNome").value
    });
    getData();
}

function getData(){
    firebase.database().ref ('/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['nome'] +", " + childData['sobre'];
        })
    })
    
}