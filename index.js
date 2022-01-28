const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");

client.config = config;
client.commands = new Collection();
client.prefix = ";";

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events) {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    console.log(`Attempting to load event ${eventName}`);
    client.on(eventName, event.bind(null, client));
}

const load_dir = fs.readdirSync("./commands");
for (const name_dir of load_dir) {
    const commands = fs.readdirSync(`./commands/${name_dir}`).filter(file => file.endsWith(".js"));
    for (const file of commands) {
        const commandName = name_dir+" "+file.split(".")[0];
        const command = require(`./commands/${name_dir}/${file}`);

        console.log(`Attempting to load command ${commandName}`);
        client.commands.set(commandName, command);
    }
}

client.once('ready', () => {
    console.log('Ready!');
});

//while(1) client.on(eventName, event.bind(client, event));

client.login(config.BOT_TOKEN);