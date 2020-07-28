module.exports = {
    name: 'clear',
    description: 'Clear messages',
    execute(message, args) {
        if(!args[0]) return message.reply('Error! Please define a second argument.')   
            message.channel.bulkDelete(args[0]);
    }
}