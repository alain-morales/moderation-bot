const { MessageEmbed, Message} = require("discord.js")



module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const timeTaken = Date.now() - message.createdTimestamp;
        const pingEmbed = {
            title: "Pong!",
            color: "#4c80d4",
            footer: { 
                text: `This message had a latency of ${timeTaken}ms.` 
        }
        };
        message.reply({ embeds: [pingEmbed]})
    }
}