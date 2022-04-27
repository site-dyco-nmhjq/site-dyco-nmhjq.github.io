function copyToClipboard(text){
    // setup the varriables
    var textarea = document.createElement("textarea");
    var answer = '';
    
    textarea.value = text;
    textarea.setAttribute('id','clipboard-textarea');
    document.body.appendChild(textarea);
     // Select some text (you could also create a range)
     textarea.select(); 
  
     // Use try & catch for unsupported browser
     try {
  
         // The important part (copy selected text)
         var successful = document.execCommand('copy');
  
         if(successful) answer = 'Copied!';
         else answer = 'Unable to copy!';
     } catch (err) {
         answer = 'Unsupported Browser!';
     }
    document.body.removeChild(textarea);
   
    alert(answer);
  };


// share telegram
var element = document.getElementById("Telegram");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://telegram.me/share/url?text=Download Icon Instagram | Stack Image&url=https://www.stackimage.my.id/File/Download-Icon/Icon-Instagram/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share telegram

// share wa
var element = document.getElementById("Whatsapp");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://wa.me/?text=Download Icon Instagram | Stack Image https://www.stackimage.my.id/File/Download-Icon/Icon-Instagram/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share wa