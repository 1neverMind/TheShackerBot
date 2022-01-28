module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.prefix) !== 0) return;

    // Our standard argument/command name definition.
    const args = message.content.slice(client.prefix.length);//.trim().split(/ +/g);
    console.log(`args ${args}`);
    const command = args.toLowerCase();
    console.log(`command ${command}`);
    const cmd = client.commands.get(command);
    console.log(`cmd ${cmd}`);
    if (!cmd) return;

    // Run the command
    cmd.run(client, message, args);
};