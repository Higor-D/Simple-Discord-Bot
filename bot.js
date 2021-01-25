const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity('(BOT DA BOPE CRIADO POR HIGOR)', { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});


client.on("message", async message => {


});

client.login(config.token);