// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBz5mzgmCQT3XBZLRfm4rKtO87OQGCBUwY",
  authDomain: "dycoursid.firebaseapp.com",
  databaseURL: "https://dycoursid-default-rtdb.firebaseio.com",
  projectId: "dycoursid",
  storageBucket: "dycoursid.appspot.com",
  messagingSenderId: "126012944864",
  appId: "1:126012944864:web:45bc9fddc51ab39341fb85",
  measurementId: "G-409VW2CMFR",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Join Our Newsletter Footer');
  
  function reset() {
    document.getElementById("Dycours").reset();
  }
  
  // Listen for form submit
  document.getElementById('Dycours').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
  
    // Save message
    saveMessage(email);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('Dycours').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email: email,
    });
  }