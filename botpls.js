//GO HERE TO EDIT THE BOT, THEN COPY PASTE IT BACK HERE: https://github.com/Bodrew/botdrew/edit/botpls/botpls.js
//Copy this and paste in the Plug Console: javascript:$.getScript('https://github.com/Bodrew/botdrew/edit/botpls/botpls.js');
/*API.on(API.CHAT, callback);
function callback(data) {
  //Simple bot command
  if (data.message === (".bod")) {
  API.moderateDeleteChat(data.cid);
  API.sendChat('Present!');
  } 
  else {}
  
  if (data.message === ("TIME FOR A LOTTERY! I WILL CHOOSE A WINNER IN 5 MINUTES! Type '.a' in the chat to enter!")){
    API.sendChat('.a');
  }
  else {}
  
  if (data.message === ("TIME FOR A GUESSING GAME! THE PERSON CLOSEST TO THE NUMBER I BE THINKING OF (1 - 1000) WILL BE MOVED UP IN THE WAIT LIST IN FIVE MINUTES!")){
    API.sendChat(Math.floor(Math.random() * 1000));
  }
  else {}
  
  if (data.message === ("#song")){
    API.getMedia();
    API.getArtist();
    API.sendChat("The current song is " + media);
  }
}
*/

API.on(API.ADVANCE, woot); 
function woot(){
  $("#woot").click();
  $('#dj-button').click();
  $('#grab').click();
  $('.pop-menu grab').children('.menu').children().children([0]).click();
}

