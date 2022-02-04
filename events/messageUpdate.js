const Discord = require("discord.js")

module.exports = {
    name: "messageUpdate",
    run: async function runAll(bot, oldMessage, newMessage) {
        if(newMessage.author.bot) return;
        let embed = new Discord.MessageEmbed()
            .setTitle("Message updated")
            .setDescription("Message updated in <#" + newMessage.channel.id + ">")
            .addField("Old message content", `${oldMessage.content}`, true)
            .addField("New message content", `${newMessage.content}`, true)
            .addField("Message", `[Jump to Message](${newMessage.url})`, false)
            .setFooter({ text: newMessage.author.tag, iconURL: newMessage.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("ORANGE")
        let channel = newMessage.guild.channels.cache.find(ch => ch.name === "area-51")
        if (!channel) return;
        channel.send({ embeds: [embed] })
    }
}