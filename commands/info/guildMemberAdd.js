module.exports = {
    name: "guildMemberAdd",
    run: async function runAll(bot, member) {
      const rulesChannel = ""
        
      const message = `Welcome <@${
        member.id
      }> to our server! check out our ${member.guild.channels.cache
        .get(rulesChannel)
        .toString()}`
  
      let channel = member.guild.channels.cache.find(ch => ch.name === "general")
      if (!channel) return;
      channel.send(message);
  }
}