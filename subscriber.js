const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1234');

const topic = 'count';

client.on('message', (topic, message) => { 

    if (topic === 'count') console.log('count -> ', String(message)) 
    else if (topic === 'p') console.log('----------------- p ->', String(message));

})

client.on('connect', () => { 
    client.subscribe('count')
    client.subscribe('p')
})