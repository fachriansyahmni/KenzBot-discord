const Discord = require("discord.js");


/**
 * 
 * @param {Discord.message | Discord.Interaction} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFunction(message, args, client) {

}

class Command {
    /**
     * @typedef {{name:string, description: string, run: RunFunction}} CommandOptions
     * @param {*} options 
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;