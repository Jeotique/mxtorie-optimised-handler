const {Command, Mxtorie_Client} = require('mxtorie-handler')
module.exports = {
    /**
     *
     * @param {Mxtorie_Client} client
     */
    init: async(client) => {
        const cmd = new Command(client, {
            name: 'kick',
            aliases: ["expulse"],
            description: "Kick a member from the guild",
            permission: "KICK_MEMBERS",
            noPermissionReply: "You need the permission `KICK_MEMBERS`",
            arguments: [
                {
                    name: "member",
                    type: "member",
                    required: true,
                    missingResponse: "The mention or the id is missing",
                    invalidResponse: "The mention or the id is invalid"
                },
                {
                    name: "reason",
                    type: "normal",
                    required: false,
                    long: true
                }
            ]
        })
        cmd.run = async(data) => {
            const {message, member, reason} = data
            member.kick(reason ?? "no reason given").then(m => {
                message.channel.send(`${member.user.tag} has been kicked, reason : \`${reason ?? "no reason given"}\``)
            }).catch(e => {
                message.channel.send(`I can't kick ${member.user.tag}`)
            })
        }
    }
}