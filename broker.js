const mosca = require('mosca');

const PORT = process.env.PORT || 4000
const settings = { port: PORT }

const broker = new mosca.Server(settings);

broker.on('ready', () => {
    console.log('Server is ready!');
    // broker.authenticate = authenticate;
})

const authenticate = (client, username, password, callback) => { 
    const authorized = (username == 'chon' && password.toString() == '1234')
    if(authorized) client.user == username;
    callback(null, authorized);
}
 
broker.on('published', (packet) => { 
    console.log(packet);
    // console.log('topic : ', String(packet.topic))
    // console.log('message : ', String(packet.payload))
    // console.log(' ')
})