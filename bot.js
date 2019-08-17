const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("612270784580157450")
setInterval(function() {
channel.send(`GOOD-WORK`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
