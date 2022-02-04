const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "eval",
    category: "owner",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {

        const None = new MessageEmbed()
        .setColor('#E74C3C')
        .setTitle('Invalid\n')
        .setDescription('Please enter in values')
        .setTimestamp()

        try {
            const code = args.join(" ");
            if (!code) {
               return message.channel.send({ embeds: [None] })
            }
            
            let evaled = eval(code);
    
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
    
              let embed = new MessageEmbed()
              .setAuthor({ name: `Eval`, iconURL: `${message.author.avatarURL()}` })
              .addField("Input", `\`\`\`${code}\`\`\``)
              .addField("Output", `\`\`\`${evaled}\`\`\``)
              .setColor("GREEN")
              .setTimestamp()
    
            message.channel.send({embeds: [embed]});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
          }
        
    }
}