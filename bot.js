const Discord = require('discord.js');
const Baron = new Discord.Client();
const prefix = '$';


client.on('message', async msg => { //Toxic Codes
    if (msg.content.toLowerCase() === "prefix" + "disco") {//Toxic Codes
   if (msg.channel.type === "dm") return; 
  const renk = [//Toxic Codes
  'DEFAULT',
  'BLACK',
  'GREEN',
  'BLUE',
  'PURPLE',
  'GOLD',
  'ORANGE',
  'RED',
  'GREY',
  'DARKER_GREY',
  'NAVY',
  'DARK_AQUA',
  'DARK_GREEN',
  'DARK_BLUE',
  'DARK_PURPLE',
  'DARK_GOLD',
  'DARK_ORANGE',
  'DARK_RED',
  'DARK_GREY',
  'LIGHT_GREY',
  'DARK_NAVY',
  'BEİGE'
];
  setInterval(function() {//Toxic Codes
        var random = Math.floor(Math.random()*(renk.length-0+1)+0);//Toxic Codes
      msg.guild.roles.find('name', "Disco").setColor(renk[random])//Toxic Codes
      }, 4000);//سرعه تغير الاوان
  }//Toxic Codes
});



client.login(process.env.BOT_TOKEN);
