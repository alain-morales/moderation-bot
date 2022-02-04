const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
    name: "whois",
    category: "info",
    description: "Gives information about a user",
    run: async ({ message, args, commandName, client, Discord}) => {
        const target = message.mentions.users.first() || message.author
        const member = message.guild.members.cache.get(target.id)

        const response = new MessageEmbed()
        .setAuthor({ name: `${target.username}`, iconURL: `${target.displayAvatarURL({ dynamic: true, size: 512 })}` })
        .setThumbnail(target.displayAvatarURL({dynamic: true}))
        .setColor('NOT_QUITE_BLACK')
        .addField("UserID", `${target.id}`, false)
        .addField("Roles", `${member.roles.cache.map(r => r).join('')}`)
        .addField("Server Member Since", `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`)
        .addField("Discord User Since", `${moment(target.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-** ${moment(target.createdAt).startOf('day').fromNow()}`)
         message.reply({embeds: [response]});
    }
        
}