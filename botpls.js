//GO HERE TO EDIT THE BOT, THEN COPY PASTE IT BACK HERE: https://github.com/Bodrew/botdrew/edit/botpls/botpls.js
//Copy this and paste in the Plug Console: javascript:$.getScript('https://github.com/Bodrew/botdrew/edit/botpls/botpls.js');
API.on(API.CHAT, msg);
function msg(data) {
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
  //if (data.messgae === (".rave")){
  //API.sendChat(data.from + " gettin' turnt up!")
  //}
  //else{}
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
  //Q-Sick's Love Massage
  if (data.message === (".q")){
    API.sendChat("@Q-Sick loves me, this I know. 'Cause Smodoopa tells me so!")
  }
  else {}
}
  //Testing auto-skip
API.on(API.DJ_ADVANCE, moveAlong);
function moveAlong(obj){
  //alert(obj.media);
}
  //New commands right above here!
  //Working; Fan Command 
API.on(API.USER_FAN, fanMe);
function fanMe(user) {
  API.sendChat("Dat flag click, @" + user.username + " :new_moon_with_face:")
  }
