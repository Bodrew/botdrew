//GO HERE TO EDIT THE BOT, THEN COPY PASTE IT BACK HERE: https://github.com/Bodrew/botdrew/edit/botpls/botpls.js
//Copy this and paste in the Plug Console: javascript:$.getScript('https://github.com/Bodrew/botdrew/edit/botpls/botpls.js');
API.on(API.CHAT, callback);
function callback(data) {
  //Simple bot command
  if (data.message === (".bod")) {
  API.sendChat('Present!');
  } 
  else {}
  
  if (data.message === ("TIME FOR A LOTTERY! I WILL CHOOSE A WINNER IN 5 MINUTES! Type '.a' in the chat to enter!")){
    API.sendChat('.a');
  }
  else {}
}
