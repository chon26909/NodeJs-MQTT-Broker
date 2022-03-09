const mqtt = require('mqtt');

const client = mqtt.connect('http://192.168.1.150:4000');

client.on('message', (topic, message) => { 

    // console.log(String(topic), String(message))

    if (topic === 'room/light1') console.log('light 1 ') 
    else if (topic === 'room/light2') console.log('light 2 ') 
    else if (topic === 'room/light3') console.log('light 3 ') 

})

client.on('connect', () => { 
    client.subscribe('room/light1')
    client.subscribe('room/light2')
    client.subscribe('room/light3')
})