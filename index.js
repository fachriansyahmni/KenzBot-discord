console.clear();

// const Discord = require('discord.js');
const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const client = new Client();
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('./config.json');


const fs = require("fs");

fs.readdirSync("./Commands").filter(file => file.endsWith(".js")).forEach(file => {

    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`)
    console.log(`Command ${command.name} loaded`)
    client.commands.set(command.name, command)
})


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("stay safe", {
        type: "Custom",
        url: "https://www.youtube.com/watch?v=u8CZ49jSsC0"
    });
});

client.on("message", message => {
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} tidak valid`);
    command.run(message, args, client);
    // switch (args[0]) {
    //     case "ping":
    //         message.channel.send("pong");
    //         break;
    // }
    // if (message.content === `${prefix}ping`) {
    //     message.channel.send("pong");
    //     console.log(message.member.voice.channel.id)
    // }

    // if (message.content === `${prefix}join`) {
    //     joinVoiceChannel({
    //         channelId: message.member.voice.channel.id,
    //         guildId: message.guild.id,
    //         adapterCreator: message.guild.voiceAdapterCreator
    //     })
    // }

})

client.login(config.token)