var filepath = process.argv[2];

var fs= require("fs");
fs.readFile(filepath,function(err,data){
    
    if(err){
        console.log("error"+err);
    }
    else
        var array = data.toString().split("\n");
        console.log(array.length-1);
        
        
        
    
});