(function() {
    const config = {
        apiKey: "AIzaSyAcMZ3IFNoPMh503iSpIQhEzZDqg5ZiAvI",
        authDomain: "projeto-live-ecaa3.firebaseapp.com",
        databaseURL: "https://projeto-live-ecaa3-default-rtdb.firebaseio.com",
        projectId: "projeto-live-ecaa3",
        storageBucket: "projeto-live-ecaa3.appspot.com",
        messagingSenderId: "481217991939",
        appId: "1:481217991939:web:4460565326eedc9f83c536",
        measurementId: "G-VJW8QMP718"
    };

    firebase.initializeApp(config);
    const bigTextEvaluationStudents = document.getElementById('bigTextEvaluationStudents');
    const dbBigTextEvaluationStudentsRef = firebase.database().ref().child('bigTextEvaluationStudents');
    dbBigTextEvaluationStudentsRef.on('value', snap => bigTextEvaluationStudents.innerText = snap.val());

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
                cell = row.insertCell(-1);
                cell.innerHTML = students[i][j];
            }
        }
    });
}());