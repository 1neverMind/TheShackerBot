exports.run = (client, message, args) => {
    message.channel.send(`Road name: ${message.guild.name}\nTotal clients: ${message.guild.memberCount}\nNumber of bar: ${null}\n`).catch(console.error);
}