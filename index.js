const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const client = new Client();
const token = 'NzI3OTIwNzU1MDg5ODY2NzUy.Xvy3CA.8C4FbCTrxHbmuRUSzJ1Mj4iEXt8';
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Success!');
    client.user.setActivity('Waiting for the '+ prefix + ' prefix', { type: 'CUSTOM_STATUS'})
})

client.on('message', message=>{

    if (message.mentions.has('455117777745870860') && !message.author.bot) {
        console.log(message.mentions.users.keyArray())
        message.reply('Daniel is not available right now. Try contacting another DM. If it is important then you can most likely reach Daniel at (613) 809 9840 or at waternlava@gmail.com')
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    switch(command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'clear':
            client.commands.get('clear').execute(message, args);
            break;
        case 'arcanist':
            client.commands.get('arcanist').execute(message, args); 
            break;
        case 'embed':
            client.commands.get('embed').execute(message, args);
            break;
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
         case 'timer':
            client.commands.get('timer').execute(message, args);
            break;
    }
});

client.login(token);