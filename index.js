const {Mxtorie_Client} = require('mxtorie-handler')
const fs = require('fs')
const client = new Mxtorie_Client()
loadCommands()
loadEvents()
client.login("") // <-- your bot token

async function loadCommands(){
    const subFolders = fs.readdirSync(`./commands`)
    for(const folder of subFolders){
        const files = fs.readdirSync(`./commands/${folder}`).filter(f => f.endsWith('.js'))
        for(const file of files){
            const cmd = require(`./commands/${folder}/${file}`)
            cmd.init(client)
        }
    }
}

async function loadEvents(){
    const subFolders = fs.readdirSync(`./events`)
    for(const folder of subFolders){
        const files = fs.readdirSync(`./events/${folder}`).filter(f => f.endsWith('.js'))
        for(const file of files){
            const event = require(`./events/${folder}/${file}`)
            client.on(event.name, (...args) => event.run(client, ...args))
        }
    }
}