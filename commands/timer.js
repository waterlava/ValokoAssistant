const Discord = require('discord.js');
module.exports = {
    name: 'timer',
    description: 'Simple countdown timer command in.',
    execute(message, args) {
        if(!args[0]) return message.reply('Error! Please define a second argument.')
        if (args[1] == 's' || args[1] == 'm' || args[1] == 'h' || args[1] == 'd' || args[1] == ' ') { 
        } else {return message.reply('Error! Please use `s`, `m`, `h` or `d` as your third argument.')}  
        
        let input = args[0]
        let seconds = 0 
        let minutes = 0
        let hours = 0
        let days = 0

        if (args[1] == 'm') {
            hours = Math.floor((input * 60) / 60 / 60);
            minutes = Math.floor((input * 60) / 60) - (hours * 60);
            seconds = (input * 60) % 60;
        } else if (args[1] == 'h') {
            hours = Math.floor((input * 60 * 60) / 60 / 60);
            minutes = Math.floor((input * 60 * 60) / 60) - (hours * 60);
            seconds = (input * 60 * 60) % 60;
        } else if (args[1] == 'd') {
            hours = Math.floor((input * 60 * 60 * 24) / 60 / 60);
            minutes = Math.floor((input * 60 * 60 * 24) / 60) - (hours * 60);
            seconds = (input * 60 * 60 * 24) % 60;
        } else {
            hours = Math.floor(input / 60 / 60);
            minutes = Math.floor(input / 60) - (hours * 60);
            seconds = input % 60;
        }

        const EmbedFinished = new Discord.MessageEmbed()
            .setTitle('Timer Finished')
            .setColor(0x9260cc)

       let interval = setInterval(() => {
            let Embed = new Discord.MessageEmbed()
                .setTitle("__Countdown Time__")
                .setColor(0x9260cc)
                .addField("\u200b​", days)
                .addField("days", "\u200b​")
                .addField("🕙", hours + " hours", true)
                .addField("🕡", minutes + " minutes", true)
                .addField("🕒", seconds + " seconds", true)
                message.channel.send(Embed)

            input --;

            if (args[1] == 'm') {
                hours = Math.floor((input * 60) / 60 / 60);
                minutes = Math.floor((input * 60) / 60) - (hours * 60);
                seconds = (input * 60) % 60;
            } else if (args[1] == 'h') {
                hours = Math.floor((input * 60 * 60) / 60 / 60);
                minutes = Math.floor((input * 60 * 60) / 60) - (hours * 60);
                seconds = (input * 60 * 60) % 60;
            } else if (args[1] == 'd') {
                hours = Math.floor((input * 60 * 60 * 24) / 60 / 60);
                minutes = Math.floor((input * 60 * 60 * 24) / 60) - (hours * 60);
                seconds = (input * 60 * 60 * 24) % 60;
            } else {
                hours = Math.floor(input / 60 / 60);
                minutes = Math.floor(input / 60) - (hours * 60);
                seconds = input % 60;
            }

            if(seconds === 0) {
                clearInterval(interval)
                message.channel.send(EmbedFinished)
        };
        }, 1000);
    }
}            