var nome = document.getElementById("Nome");
var tipo = document.getElementById("Tipo");
var marca = document.getElementById("Marca");

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
    firebase.database().ref ('cenaMaquiagem/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            //a variavel child key esta pegando o index de cada registro
            var childKey = childSnapshot.key;

            //o child data esta pegando os dados de cada registro
            var childData = childSnapshot.val();

            //neste comando ele esta mandando para dentro do html cada dados recuperados 
            document.getElementById("data" + childKey).innerHTML = childData['tipo'] +" " + childData['nome']+ " " + childData['marca'] ;
        })
    })
    
}

function updateData(){
    var rootRef = firebase.database().ref("cenaMaquiagem/");
    const newData = {
        nome: nome.value,
        tipo: tipo.value,
        marca: marca.value
    };
    rootRef.child(Index.value).update(newData);
    
}
function deleteData(){
    var rootRef = firebase.database().ref("cenaMaquiagem/");

    rootRef.child(Index.value).remove();
    
}
