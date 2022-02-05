const ms = require("ms");
const { MessageEmbed, Message } = require("discord.js");

module.exports = {
  name: "timeout",
  category: "mod",
  permissions: ["MANAGE_MESSAGES"],
  devOnly: false,
  run: async ({ client, message, args }) => {
    
    
    const errorEmbed = new MessageEmbed()
        .setTitle("Error")
        .setColor("#ff5447")
        .setDescription("Couldn't timeout member.");

    const target = message.mentions.users.first();  
    if (!target) return message.reply({ embed: [errorEmbed] });

    const invalidEmbed = new MessageEmbed 
    .setTitle("Error")
    .setColor("#ff5447")
    .setDescription("Invalid parameters. Specify time.");

    if (!args[1]) return message.reply({ embed: [invalidEmbed] });
   
    const memberTarget = message.guild.members.cache.get(target.id);
    const time = ms(args[1]);
    const reason = args[2] || null;
    memberTarget.timeout(time, reason);
    
    const timeoutEmbed = new MessageEmbed
        .setTitle("Success")
        .setColor("#47ff8a")
        .setDescription({
          text: `${target} has been timed out for ${ms(time, { long: true })}`,
        })
    message.reply({ embed: [timeoutEmbed] });
  },
};



