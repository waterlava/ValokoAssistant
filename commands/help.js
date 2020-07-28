const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'A basic help command.',
    execute(message, args) {
        const Embed = new Discord.MessageEmbed()
                .setTitle('Helper Embed')
                .setColor(0xFF0000)
                .setDescription('Make sure to use the .help to get access to the commands');
            message.author.send(Embed);
    }
}