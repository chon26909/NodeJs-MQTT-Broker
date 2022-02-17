const mosca = require('mosca');


const PORT = process.env.PORT || 4000

const settings = {
    port: PORT ,
}

const broker = new mosca.Server(settings);

broker.on('ready', () => {
    console.log('Broker is ready!')
})

broker.on('published', (packet) => { 
    console.log(String(packet.payload))
})