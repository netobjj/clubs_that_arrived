const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

const cors = require('cors');
import  './db.json'

app.use(cors())

app.get('/', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
});

io.on('connection', (socket) =>{
    console.log('Cliente conectado!');
    dataUpdate(socket);
});



function dataUpdate(socket) {
    // get clubs that arrived
    socket.emit('dataupdate', "Clube 'Louvadores' da ACM chegou!" + new Date().toLocaleString())//Array.from({length: 8}, ()=> Math.floor(Math.random() * 40)));

    /* setTimeout(() =>{
        dataUpdate(socket);
    }, 5000) */
}