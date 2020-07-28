module.exports = {
    name: 'ping',
    description: 'Creates an embed',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Hello')
            .addField('Player Name', message.author.username)
            .addField("Current Server: ", message.guild.name)
            .setThumbnail(message.author.avatarURL())
            message.channel.send(embed)
    }
}