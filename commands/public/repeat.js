const {Command, Mxtorie_Client} = require('mxtorie-handler')
module.exports = {
    /**
     *
     * @param {Mxtorie_Client} client
     */
    init: async(client) => {
        const cmd = new Command(client, {
            name: 'repeat',
            aliases: ["répete"],
            description: "Send a message and the bot will repeat it",
            arguments: [
                {
                    name: "message_to_repeat",
                    type: "normal",
                    long: true,
                    required: true,
                    missingResponse: "The message to repeat is missing"
                }
            ]
        })
        cmd.run = async(data) => {
            const {message} = data
            message.channel.send(data['message_to_repeat'])
        }
    }
}