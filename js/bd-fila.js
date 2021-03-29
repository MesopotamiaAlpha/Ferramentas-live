var nome = document.getElementById("Nome");
var tipo = document.getElementById("Tipo");
var marca = document.getElementById("Marca");

function writeData(){
    var Index = document.getElementById("Index").value
    firebase.database().ref("filaSubs/" + Index).set({
        tipo: document.getElementById("Tipo").value,
        nome: document.getElementById("Nome").value,
        marca: document.getElementById("Marca").value
    });
    getData();
}

function getData(){
    firebase.database().ref ('filaSubs/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['tipo'] +", " + childData['nome']+ ", " + childData['marca'] ;
        })
    })
    
}

function updateData(){
    var rootRef = firebase.database().ref("filaSubs/");
    const newData = {
        nome: nome.value,
        tipo: tipo.value,
        marca: marca.value
    };
    rootRef.child(Index.value).update(newData);
    
}

function deleteData(){
    var rootRef = firebase.database().ref("filaSubs/");

    rootRef.child(Index.value).remove();
    
}
