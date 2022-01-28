exports.run = (client, message, args) => {
    const barmanName = message.owner;
    message.channel.send(`Barman: ${barmanName}.`).catch(console.error);
}