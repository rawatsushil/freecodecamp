var http = require("http");
var uri = process.argv[2];

var stream ='';
http.get(uri,function(response){
    
   response.setEncoding('utf8');
   response.on('data',function(data){
       
       stream = stream+data
       
   }) 
    
    response.on('end',function(){
        
        console.log(stream.length);
        console.log(stream);
    })
    
});