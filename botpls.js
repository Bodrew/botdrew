//GO HERE TO EDIT THE BOT, THEN COPY PASTE IT BACK HERE: https://github.com/Bodrew/botdrew/edit/botpls/botpls.js
//Copy this and paste in the Plug Console: javascript:$.getScript('https://github.com/Bodrew/botdrew/edit/botpls/botpls.js');
API.on(API.CHAT, callback);
function callback(data) {
	//Simple bot command
  if (data.message === (".bod")) {
  API.sendChat('Present!');
  } 
  else {}
	//Expressing my love for Justin
  if (data.message === (".smodlovesbod")){
  API.sendChat("It's true, I heard @Smodoopa say it!");
  }
  else {}
	//The wake-up command
  if (data.message === (".wakeup")){
  API.sendChat("@Bodrew Wake up, me!")
  }
  else {}
	//Expressing my love for Miss Bean
  if (data.message === (".bodhartsbeany")){
  API.sendChat("And she still won't date me :expressionless:")
  }
  else{}
  //Beany's insult command ;3
  if (data.message === (".beany")){
  API.sendChat("Whasian! >:D")
  }
  else{}
  
  if (data.message === ("TIME FOR A LOTTERY! I WILL CHOOSE A WINNER IN 5 MINUTES! Type '.a' in the chat to enter!")) {
  	API.sendChat('.a');
  }
  else {}
  //New commands right above here!
}
