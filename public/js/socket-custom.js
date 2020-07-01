var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// el .on escucha información
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// el .emit envia informacion - emite un evento
socket.emit('enviarMensaje', {
    usuario: 'Mariana',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor: ', resp);
});


// Escuchar info
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
})