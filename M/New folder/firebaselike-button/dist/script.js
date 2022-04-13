// Firebase Config
var firebaseConfig = {
	apiKey: "AIzaSyDc7HW9pDHsx2Z4fhKRfjRaLkKQ5-YdZSE",
  authDomain: "dycoursid-contact.firebaseapp.com",
  databaseURL: "https://dycoursid-contact-default-rtdb.firebaseio.com",
  projectId: "dycoursid-contact",
  storageBucket: "dycoursid-contact.appspot.com",
  messagingSenderId: "253387034234",
  appId: "1:253387034234:web:06f2bdf8675dad6fde35c3",
  measurementId: "G-S76DDK77SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = firebase.database();

//Configure like button
  
  let docRefIdlike = "id";
  var counter = 0;
    
  const refidlike = db.collection('posts').where('imageUrl', '==', img_url)
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				docRefIdlike = doc.id;
				console.log(docRefIdlike);
			});
			database.ref(docRefIdlike).on('value',function(snapshot) {
			counter = snapshot.val().likes;
			liketxt.innerHTML = counter;
		  });
			
		});
  
  
  likebtn.addEventListener ("click", function() {
		if(firebase.auth().currentUser != null) {
			counter++;
			liketxt.innerHTML = counter;
			database.ref(docRefIdlike).set({
				likes:counter
			})
		}		
	});