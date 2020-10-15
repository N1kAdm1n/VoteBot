// JavaScript source code
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if((message.channel.id =="713101698150957136")||(message.channel.id =="718451613575938068")) {
		console.log('Author: ' + message.author.username); console.log('Message: ' + message.content); 
		message.react('➕'); message.react('➖');
	}
    else if (message.content.startsWith(`${prefix}d12`) && (message.author.id =="278898242333442048" ||  message.author.id =="443722870791864340")) {
			console.log('Author: ' + message.author.username); console.log('Message: ' + message.content);
          	message.channel.send(`${message.author} you rolled ${getRandomInRange(1,12)}`);
    }
	else if (message.content.startsWith(`${prefix}d12`)) {
			console.log('Author: ' + message.author.username); console.log('Message: ' + message.content);
          	message.channel.send(`${message.author} ты кто такой? Давай, до свидания!`);
    }
	
});
client.login(token);
