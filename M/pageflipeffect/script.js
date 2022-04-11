//FIREBASE
var firebaseConfig = {
  aapiKey: "AIzaSyBWh4DZMVyn2JmAwFcAsSw5BaEvnXvrQQ0",
  authDomain: "blogandre-chat.firebaseapp.com",
  databaseURL: "https://blogandre-chat-default-rtdb.firebaseio.com",
  projectId: "blogandre-chat",
  storageBucket: "blogandre-chat.appspot.com",
  messagingSenderId: "106193920955",
  appId: "1:106193920955:web:135b16e7782d328ab99a9e",
  measurementId: "G-L6FSFLNS9C"
};

//INIT FIREBASE
firebase.initializeApp(firebaseConfig);
  
//VARS
var database = firebase.database(),
    buttons = document.getElementsByClassName("like-counter"),
    buttonCounter = 0,
    newCount = 0,
    counter = 0,
    initialValue = 0,
    buttonNumber,
    initCount,
    edition = '_fyre_test_';

//LOOP LIKE BUTTONS
for (var buttonNumber = 0; buttonNumber < buttons.length; buttonNumber++) {
  
  //CURRENT BUTTON #
  const currentButton = buttonNumber;
  
  //CHECK DB
  database.ref('counter' + edition + buttonNumber).on('value', function(snapshot, initCount) {
    
    //INIT VAL
    if (snapshot.val() && snapshot.val().clickCounter) {
        counter = snapshot.val().clickCounter;
    };
   
    //SET INIT VAL
    if (!counter) {
      initCount = initialValue;
    } else {
      initCount = parseInt(counter);
    }
    
    //renderCounter
    renderCounter(currentButton, initCount);
    
  });
  
}; 

//COUNT HTML
function renderCounter(buttonNumber, counter) {
  $('.like-counter[data-counter="'+buttonNumber+'"]').find('.count-total').html(counter);
}

//LOOP ONCLICK
$('.like-counter').each( function(index) {
  
  //ADD ATTR
  $(this).attr('data-counter', index);
  
	$(this).on('click', function() {
    
    //INTIAL LOADED TOTAL
    var initLoaded = $(this).find('.count-total').html();
    
    //COUNTER VALUE
    if (counter === 0) {
      counter = initialValue;
    } else {
      counter = initLoaded;
    }
    
    //TOGGLE +1 or -1 & CLASS/STYLES
    $(this).toggleClass('counter-clicked'); 
    if($(this).hasClass('counter-clicked')) {
      counter++;
      $(this).find('img').attr('src', 'https://uploads-ssl.webflow.com/60d3d265b741c624a9a17b9f/612413a4426d4ddfd5f7138f_solid-heart.png');
    } else {
      counter--;
      $(this).find('img').attr('src', 'https://assets.website-files.com/60d3d265b741c624a9a17b9f/612413a47cae0b9488bbd9e8_outline-heart.png');
    }
    
    //SET COUNT
    database.ref('counter' + edition + index).set({
      clickCounter: counter
    })
    
    //renderCounter
    setTimeout(function(){
      renderCounter(index, counter);
    }, 1700);
    
	})
  
})