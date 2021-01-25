const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")

client.login(config.token);

client.on('ready', client => {
    console.log('Bot ready!!!!');
})

client.on('message', message =>{
    if (message.author.bot || !message.guild) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content
        .slice(config.prefix.length) // Removes prefix
        .trim() // Removes spaces
        .split(/ +/g); // Makes it an Array bye spliting space
    // Array is [ 'hi', ''argument', 'bye' ]
    const command = args.shift().toLowerCase();
    if (command == 'ping') {
        message.channel.send('pong');
    }
    if (command == 'test') {
        message.channel.send('testsend.mp4'); 
    }
})