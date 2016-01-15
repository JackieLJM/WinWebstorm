var http=require("http");

http.createServer(function(request,response) {
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);

var net=require("net");
var chatServer=net.createServer();
clientList=[];
chatServer.on("connection",function(client){
    client.name=client.remoteAddress+":"+client.remotePort;
    client.write();
    clientList.push(client);
    client.on("data",function(data){
        //console.log(data)
        //for(var i=0;i<clientList.length;i++){
        //    clientList[i].write(data);
        //}
        boradcast(data,client);
    });
    client.on("end",function(){
        clientList.splice(clientList.indexOf(client),1);
    });
    client.on("error",function(e){
        console.log(e);
    })
});

function broadcast(message,client){
    var cleanup=[];
    for(var i=0;i<clientList.length;i++){
            if(client!==clientList[i]){
                clientList[i].write(client.name+data+message);
            }else{
                cleanup.push(clientList[i]);
                clientList[i].destroy();
            }
        }
    for(var i=0;i<cleanup.length;i++){
        clientList.splice(clientList.indexOf(cleanup[i]),1);
    }
}