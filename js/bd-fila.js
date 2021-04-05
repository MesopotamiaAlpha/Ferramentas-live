var nick = document.getElementById("Nick");


function writeData(){
    var Index = document.getElementById("Index").value
    firebase.database().ref("filaSubs/" + Index).set({
        nick: document.getElementById("Nick").value

    });
    getData();
}

function getData(){
    firebase.database().ref ('filaSubs/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot)
        {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data" + childKey).innerHTML = childData['nick'];
        })
    })
    
}

function updateData(){
    var rootRef = firebase.database().ref("filaSubs/");
    const newData = {
        nick: nick.value
    };
    rootRef.child(Index.value).update(newData);
    
}

function deleteData(){
    var rootRef = firebase.database().ref("filaSubs/");

    rootRef.child(Index.value).remove();
    
}

