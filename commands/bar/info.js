exports.run = (client, message, args) => {
    const barmanName = message.author;
    message.channel.send(`Barman: ${barmanName}.`).catch(console.error);
}