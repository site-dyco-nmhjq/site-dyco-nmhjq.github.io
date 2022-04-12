// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDc7HW9pDHsx2Z4fhKRfjRaLkKQ5-YdZSE",
  authDomain: "dycoursid-contact.firebaseapp.com",
  databaseURL: "https://dycoursid-contact-default-rtdb.firebaseio.com",
  projectId: "dycoursid-contact",
  storageBucket: "dycoursid-contact.appspot.com",
  messagingSenderId: "253387034234",
  appId: "1:253387034234:web:06f2bdf8675dad6fde35c3",
  measurementId: "G-S76DDK77SR",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('Contact');
  
  function reset() {
    document.getElementById("Dycours-contact").reset();
  }
  
  // Listen for form submit
  document.getElementById('Dycours-contact').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
  
    // Clear form
    document.getElementById('Dycours-contact').reset();
  }
  
  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
  }