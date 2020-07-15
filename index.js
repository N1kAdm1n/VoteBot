// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if((message.channel.id == "731650898400641085")||(message.channel.id == "719201079568629760")) {
	console.log('Author: ' + message.author.username);
	console.log('Message: ' + message.content);
	message.react('➕');
	message.react('➖');
}
});
client.login(token);
