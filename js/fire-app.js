  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAcMZ3IFNoPMh503iSpIQhEzZDqg5ZiAvI",
    authDomain: "projeto-live-ecaa3.firebaseapp.com",
    projectId: "projeto-live-ecaa3",
    storageBucket: "projeto-live-ecaa3.appspot.com",
    messagingSenderId: "481217991939",
    appId: "1:481217991939:web:4460565326eedc9f83c536",
    measurementId: "G-VJW8QMP718"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //var logo a baixo do firestore é para iniciar ele
    var firestore = firebase.firestore();
    firebase.analytics();