const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
    name: "embed",
    description: "embed message",
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        embed.setTitle("Test embed");
        embed.setColor('#0099ff');
        embed.setDescription('Some description here');
        embed.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org');
        embed.setURL('https://discord.js.org/');
        message.reply({ embeds: [embed] });
    }
});