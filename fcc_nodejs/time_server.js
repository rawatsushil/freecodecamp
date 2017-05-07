var net = require('net');
var port = process.argv[2];

var server = net.createServer(function listener(socket){
    
    var datetime = new Date();
    var out ="";
    
    var year = datetime.getFullYear();
    var month = ('0'+(datetime.getMonth()+1)).slice(-2);
    var date = ('0'+datetime.getDate()).slice(-2);
    var hour = ('0' + datetime.getHours()).slice(-2);
    var min = ('0'+datetime.getMinutes()).slice(-2);
    
    out = ""+year+'-'+month+'-'+date+' '+hour+':'+min+"\n";
    
    socket.end(out);
    socket.pipe(socket);
});

server.listen(port);