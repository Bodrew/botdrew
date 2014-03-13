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
  API.sendChat("Kinda. idk. .-.")
  }
  else{}
  //Execute to turn up! \o/
  if (data.messgae === (".rave")){
  API.sendChat(data.from + " gettin' turnt up!")
  }
  else{}
  //Beany's insult command ;3
  if (data.message === (".beany")){
  API.sendChat("Whasian! >:D")
  }
  else{}
  //CookieMichal's CommandoWando
  if (data.message === (".bodlovescookie")){
    API.sendChat("@CookieMichal Fuck yeah man, cookies fer dayz")
  }
  else {}
  //Q-Sick's Loves Massage
  if (data.message === (".q")){
    API.sendChat("@Q-Sick loves me, this I know. 'Cause Smodoopa tells me so!")
  }
  else {}
  
  //New commands right above here!
}
  //Testing 
API.on(API.USER_FAN, callback);
function callback(user) {
  if (API.USER_FAN){
  API.on(API.CHAT);
  function callback(data){
  API.sendChat("I am most gracious for your click of my flag @" + user.username)}
    }
}
