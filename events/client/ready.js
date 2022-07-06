const {Mxtorie_Client} = require('mxtorie-handler')
const Discord = require('discord.js')

module.exports = {
    name: 'ready',
    /**
     *
     * @param {Mxtorie_Client} client
     */
    run: async(client) => {
        console.clear()
        console.log(`${client.user.tag} connecté`)
    }
}