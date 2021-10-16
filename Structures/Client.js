const Discord = require("discord.js");

const Command = require("./Command.js");

class Client extends Discord.Client {
    constructor(options) {
        super({ intents: ["GUILDS", "GUILD_MESSAGES"] });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
    }
}


module.exports = Client;