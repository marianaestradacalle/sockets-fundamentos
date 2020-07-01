const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Esta es la comunicacion del backend directa
module.exports.io = socketIo(server);
require('./sockets/socket');
// Saber cuando un usario se conecta a la app

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});