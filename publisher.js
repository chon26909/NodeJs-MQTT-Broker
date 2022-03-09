const mqtt = require('mqtt');
const client = mqtt.connect('http://broker.mqttdashboard.com:8000');

client.on('connect', () => { 

    let count = 0;

    setInterval(() => {

        count++;

        client.publish('count', String(count))
    }, 5000);

    setInterval(() => {

        count++;
        console.log("publisher")
        client.publish('chon/temperature', '30')
    }, 1000);
})