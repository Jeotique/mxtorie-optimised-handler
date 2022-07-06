const {Command, Mxtorie_Client} = require('mxtorie-handler')
module.exports = {
    /**
     *
     * @param {Mxtorie_Client} client
     */
    init: async(client) => {
        const cmd = new Command(client, {
            name: 'addrole',
            description: "Add a role to a member in the guild",
            permission: "MANAGE_ROLES",
            noPermissionReply: "You need the permission `MANAGE_ROLES`",
            arguments: [
                {
                    name: "member",
                    type: "member",
                    required: true,
                    missingResponse: "The mention or the id is missing",
                    invalidResponse: "The mention or the id is invalid"
                },
                {
                    name: "role",
                    type: "role",
                    required: true,
                    missingResponse: "The mention or the id is missing",
                    invalidResponse: "The mention or the id is invalid"
                }
            ]
        })
        cmd.run = async(data) => {
            const {message, member, role} = data
            if(member.roles.cache.has(role.id)) return message.reply("This member already have this role.")
            member.roles.add(role.id, `Addrole by ${message.author.tag}`).then(m => {
                message.channel.send(`Role added with success`)
            }).catch(e=>{
                message.channel.send("I can't add this role")
            })
        }
    }
}