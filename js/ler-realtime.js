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

/*setTimeout(function() {
    window.location.reload(1);
  }, 25000); // 3 minutos*/