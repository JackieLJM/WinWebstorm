var net=require('net');

var chatServer=net.createServer();
chatServer.on('connection',funtion(client){
	client.write('Hi!\n');
	client.write('Bye!\n');
	client.end();
})

chatServer.Listen(9000)