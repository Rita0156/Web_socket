const x = require('ws')
const wss =new x.WebSocketServer({port : 8000})

wss.on('connection',(socket)=>{
    console.log('A new connection');
    socket.send('Hello from product manager')
    socket.on('message',(msg)=>{
        console.log("message : "+msg);
    })
    socket.on('close',()=>{
        console.log('client has disconnected')
    })
})
