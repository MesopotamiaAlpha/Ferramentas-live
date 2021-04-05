(function() {
    var table = document.querySelector('#table1 tbody');
    const dbEvaluationStudentsRef = firebase.database().ref().child('filaSubs/');
    dbEvaluationStudentsRef.on('value', snap => {
    while(table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }

    var students = snap.val();
    for(var i in students) {
        var row = table.insertRow(-1);
        for(var j in students[i]) {
               var cell = row.insertCell(-1);
                cell.innerHTML = students[i][j];
            }
        }
    });
}());