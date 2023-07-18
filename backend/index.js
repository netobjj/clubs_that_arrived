const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

const cors = require('cors');
const db = require('./db.json');
const fs = require("fs");

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

io.on('connection', (socket) => {
    console.log('Cliente conectado!');
    dataUpdate(socket);
});



function dataUpdate(socket) {
    // get clubs that arrived
    let club_arrived = JSON.parse(db);
    if(club_arrived) {
        socket.emit('dataupdate', club_arrived )
    } else {
        socket.emit('dataupdate', false)
    }


    /* setTimeout(() =>{
        dataUpdate(socket);
    }, 5000) */
}