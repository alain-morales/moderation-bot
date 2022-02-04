module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`)
    }
}