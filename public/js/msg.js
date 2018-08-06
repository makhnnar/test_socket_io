var socket = io.connect("http://127.0.0.1:4005");

var msg = $('#input_msg').val();

var nick = $('#input_nick').val();

console.log('SE PRESIONO ');

var id_usuario = "";

var id_cuarto = "";

//var id_rooms = [1,2,3,4,5,6,7,8,9]

socket.emit('enter',{
	nickname:nick,
	message:msg
});

socket.on('data', function(data){
	$('#output').html($('#output').html()+'<p><strong>'+data+'</strong></p>').show();
    console.log(data);
});

socket.on('directo', function(data){
	id_usuario = data;
	$('#output').html($('#output').html()+'<p><strong>ID_USUARIO: '+data+'</strong></p>').show();
    console.log("ID_USUARIO: "+data);
});

socket.on('friend_list', function(data){
	for(var i=0;i<data.length;i++){
		$('#output').html($('#output').html()+'<p><strong>Pos: '+i+'  --->  '+JSON.stringify(data[i])+'</strong></p>').show();
    	console.log("ID_USUARIO: "+data[i]);
	}
});

//var output = $('#output');
//crear una variable que mantenga mel cuarto anterior para hacer el swithc del cuarto y hacer el cambio en el server
$(function(){
	
	$('ul.tabs').tabs();

	$('.tabs').on('click',function(){
		socket.emit('room_leave',{
			id_room:id_cuarto,
			id_user:id_usuario
		});
		id_cuarto = $(".active").attr('val');
		socket.emit('room_join',{
			id_room:id_cuarto,
			id_user:id_usuario
		});
		console.log("Active Tab:"+$(".active").attr('val'));	
	});


	$('#send_msg').on('click',function(){
		
		msg = $('#input_msg').val();

		nick = $('#input_nick').val();

		console.log('SE PRESIONO ');

		socket.emit('chat',{
			nickname:nick,
			message:msg
		});

	});

	$('#send_msg_room').on('click',function(){
		
		msg = $('#input_msg').val();

		nick = $('#input_nick').val();

		console.log('SE PRESIONO ');

		socket.emit('chat_room',{
			id_room:id_cuarto,
			nickname:nick,
			message:msg
		});

	});

});

socket.on('chat',function(data){
	$('#output').html($('#output').html()+'<p><strong>'+data.nickname+'</strong>: '+data.message+'</p>').show();
	console.log('MSG: '+data.message);
});



