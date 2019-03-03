

// Comando para establecer la conexión
var socket = io();

//JQquery tiene una referencia directa a un elemento HTML
var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

// on 'estadoActual'
socket.on('estadoActual', function(resp){
    label.text(resp.actual);
});


$('button').on('click', function(){
    
    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);
    });
});
