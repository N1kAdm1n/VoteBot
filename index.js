﻿// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if((message.channel.id == "713101698150957136")||(message.channel.id == "718451613575938068")) {
	message.react('➕');
	message.react('➖');
}
});
client.login(token);
