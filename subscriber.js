const mqtt = require('mqtt');

const options = {
    clientId: "NodeJSClient",
    username: "chon",
    password: "1234",
};
const client = mqtt.connect('http://192.168.1.150:4000',options);

client.on('message', (topic, message) => {
    console.log("word")
    if (topic === 'camera/picture') {

        console.log(message);

        // let imgData = new Blob(binary.buffer, { type: 'application/octet-binary' });
        // let link = URL.createObjectURL(imgData);
        
        // let img = new Image();
        // img.onload = () => URL.revokeObjectURL(link);
        // img.src = link;
        // console.log(Buffer.from(message).toString('base64'));

    }

})

client.on('connect', () => {
    client.subscribe('camera/picture')

})