const Discord = require("discord.js")

module.exports = {
    name: "messageDelete",
    run: async function runAll(bot, message) {
        if(message.author.bot) return;
        let embed = new Discord.MessageEmbed()
            .setTitle("Message deleted")
            .setDescription(`Message deleted in <#${message.channel.id}>`)
            .addField("Message content", `${message.content}`, true)
            .addField("Message ID", `${message.id}`, true)
            .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("RED")
        let channel = message.guild.channels.cache.find(ch => ch.name === "area-51")
        if (!channel) return;
        channel.send({ embeds: [embed] });
    }
}