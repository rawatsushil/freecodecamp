 //FILTERED LS (Exercise 5 of 13)  
   
/*  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  */
  
"use strict"
  
const fs = require('fs');
const path = process.argv[2];
const ext =  process.argv[3];
fs.readdir(path, (err, files) => {
    if(err)
        console.log("error"+err);
    else{
        
        files.forEach(file =>{
            file = file +'';
            if(file.split(".")[1].indexOf(ext)!==-1){
                console.log((file));
            }
        });
    }
        
})