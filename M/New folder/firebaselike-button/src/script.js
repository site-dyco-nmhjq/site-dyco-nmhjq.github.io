// Firebase Config
var firebaseConfig = {
	//configure API key here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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