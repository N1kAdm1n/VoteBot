// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if((message.channel.id == "id первого канала")||(message.channel.id == "id второго канала")) {
	console.log(message.content);
	message.react('➕');
	message.react('➖');
}
});
client.login(token);