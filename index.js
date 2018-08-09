//node libraries
var express = require('express');
var socket = require('socket.io');

var IOSManager = require('./managers/IOSocketManager');

var app = express();

var _ios = IOSManager();

var server = app.listen(4005, function () {
    console.log('Listening in port 4005');
});

app.use(express.static('public'));

var io = socket(server);

const amigos = [
    {
        id: 1,
        nombre: "Pedro",
        estado: "masturbandome",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 2,
        nombre: "Orlan",
        estado: "programando",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 3,
        nombre: "Jose",
        estado: "Mintiendo",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 4,
        nombre: "Simon",
        estado: "El gran varon",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 5,
        nombre: "Alejo",
        estado: "Che Valentinaaaaa",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 6,
        nombre: "Valentina",
        estado: "Cocinando",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 7,
        nombre: "Alberto",
        estado: "En Brasil",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 8,
        nombre: "Junior",
        estado: "Hola",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 9,
        nombre: "Carlos",
        estado: "Holaaaaaa",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    {
        id: 10,
        nombre: "Chichi",
        estado: "Chao",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },

];

const solicitudes = [
    {
        id: 1,
        nombre: "Pedro sl",
        estado: "masturbandome",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 2,
        nombre: "Orlan sl",
        estado: "programando",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 3,
        nombre: "Jose sl",
        estado: "Mintiendo",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 4,
        nombre: "Juan sl",
        estado: "Ladillado",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 4,
        nombre: "Simon sl",
        estado: "El gran varon",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 5,
        nombre: "Alejo sl",
        estado: "Che Valentinaaaaa",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 6,
        nombre: "Valentina sl",
        estado: "Cocinando",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 7,
        nombre: "Alberto sl",
        estado: "En Brasil",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 8,
        nombre: "Junior sl",
        estado: "Hola",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 9,
        nombre: "Carlos sl",
        estado: "Holaaaaaa",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },
    {
        id: 10,
        nombre: "Chichi sl",
        estado: "Chao",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "10:50"
    },

];

const conversaciones = [
    {
        id: 1,
        nombre: "orlan",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 2,
        nombre: "daniel",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 3,
        nombre: "brito",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 4,
        nombre: "pedro",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 5,
        nombre: "hermes",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 6,
        nombre: "gomez",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 7,
        nombre: "gutierrez",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 8,
        nombre: "cesar",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 9,
        nombre: "lois",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },
    {
        id: 10,
        nombre: "alberto",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
    },

];

const mensajes = [
    {
        id: 1,
        nombre: "orlan chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 2,
        nombre: "daniel chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 3,
        nombre: "brito chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 4,
        nombre: "pedro chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 5,
        nombre: "hermes chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 6,
        nombre: "gomez chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 7,
        nombre: "gutierrez chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 8,
        nombre: "cesar chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 9,
        nombre: "lois chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
    {
        id: 10,
        nombre: "alberto chat",
        mensaje: "Hola Como estas?",
        foto: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
        hora: "12:30",
    },
];


io.on('connection', function (socket) {

    console.log('DATA: ' + socket.id);

    console.log('Made socket connection');

    _ios.sendPmMsg(io, socket.id, 'directo', socket.id);

    _ios.sendPmMsg(io, socket.id, 'friend_list', amigos);

    _ios.sendPmMsg(io, socket.id, 'friend_request', solicitudes);

    _ios.sendPmMsg(io, socket.id, 'actv_chats', conversaciones);

    _ios.sendPmMsg(io, socket.id, 'chats', mensajes);




    socket.on('enter', function (data) {

        console.log('DATA: ' + JSON.stringify(data));

        _ios.sendEveryOne(io, 'chat', {
            nickname: 'SERVER',
            message: 'Bienvenido ' + data.nickname + ' al CHAT'
        });

    });

    socket.on('chat', function (data) {

        _ios.sendEveryOne(io, 'chat', data);

    });

    socket.on('friend_list', function (data) {

        _ios.sendPmMsg(io, socket.id, 'friend_list', amigos);

    });

    socket.on('friend_request', function (data) {

        _ios.sendPmMsg(io, socket.id, 'friend_request', solicitudes);

    });

    socket.on('actv_chats', function (data) {

        _ios.sendPmMsg(io, socket.id, 'actv_chats', conversaciones);

    });

    socket.on('chats', function (data) {

        _ios.sendPmMsg(io, socket.id, 'chats', mensajes);

    });
    socket.on('active_chats', function (data) {

        _ios.sendEveryOne(io, 'chat', data);

    });

    socket.on('chat_room', function (data) {

        _ios.sendRoomMsg(io, data.id_room, 'chat', data);

    });

    socket.on('room_join', function (data) {

        _ios.joinRoom(socket, data.id_room);

    });

    socket.on('room_leave', function (data) {

        _ios.leaveRoom(socket, data.id_room);

    });

});