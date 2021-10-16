const Command = require("../Structures/Command.js");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = new Command({
    name: "join",
    description: "join channel",
    async run(message, args, client) {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })
    }
});