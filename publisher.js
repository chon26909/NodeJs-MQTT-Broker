const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1234');

client.on('connect', () => { 

    let count = 0;

    setInterval(() => {

        count++;

        client.publish('count', String(count))
    }, 5000);

    setInterval(() => {

        count++;

        client.publish('p', 'part 10 second')
    }, 10000);
})