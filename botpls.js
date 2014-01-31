//GO HERE TO EDIT THE BOT, THEN COPY PASTE IT BACK HERE: https://github.com/Bodrew/botdrew/edit/botpls/botpls.js
//Copy this and paste in the Plug Console: javascript:$.getScript('https://github.com/Bodrew/botdrew/edit/botpls/botpls.js');
API.on(API.CHAT, callback);
function callback(data) {
	//Simple bot command
  if (data.message === ".bod") {
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
	//Execute to turn up! \o/
  if (data.messgae === (".rave")){
  API.sendChat("@" + data.from + " gettin' turnt up!");
  API.setVolume(30)}
  else{}
  //Beany's insult command ;3
  if (data.message === (".beany")){
  API.sendChat("Whasian! >:D")
  }
  else{}
  if (data.message === (".bodlovescookie")){
  	API.sendChat("@CookieMichal Fuck yeah man, cookies fer dayz")
  }
  else {}
  
  //New commands right above here!
}
