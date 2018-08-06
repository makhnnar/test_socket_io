//node libraries
var express = require('express');
var socket = require('socket.io');

var IOSManager = require('./managers/IOSocketManager');

var app = express();

var _ios = IOSManager();

var server = app.listen(4005,function(){
	console.log('Listening in port 4000');
});

app.use(express.static('public'));

var io = socket(server);

const amigos = [
    {
   id: 1,
nombre:  "Pedro",
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
nombre: "Juan",
estado: "Ladillado",
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
nombre:  "Valentina",
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

io.on('connection',function(socket){

    console.log('DATA: '+socket.id);

	console.log('Made socket connection');

    _ios.sendPmMsg(io,socket.id,'directo',socket.id);

    _ios.sendPmMsg(io,socket.id,'friend_list',amigos);

	socket.on('enter',function(data){

        console.log('DATA: '+JSON.stringify(data));
        
        _ios.sendEveryOne(io,'chat',{
            nickname: 'SERVER',
            message: 'Bienvenido '+data.nickname+' al CHAT'
        });

	});

    socket.on('chat',function(data){

        _ios.sendEveryOne(io,'chat',data);

    });

    socket.on('friend_list',function(data){

         _ios.sendPmMsg(io,socket.id,'friend_list',amigos);

    });

    socket.on('active_chats',function(data){

        _ios.sendEveryOne(io,'chat',data);

    });

    socket.on('chat_room',function(data){

        _ios.sendRoomMsg(io,data.id_room,'chat',data);
    
    });

    socket.on('room_join',function(data){

        _ios.joinRoom(socket,data.id_room);

    });

    socket.on('room_leave',function(data){

        _ios.leaveRoom(socket,data.id_room);

    });

});