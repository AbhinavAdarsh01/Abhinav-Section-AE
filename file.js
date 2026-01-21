const fs = require("fs");

/*fs.writeFile("helloFile.txt",
    "today we are learning file system",
    (error)=>{
        if (error){
            console.log("error in creating the file");
        }else{
            console.log("File is created");
        }

})*/
fs.readFile("helloFile.txt","utf-8",(error,data)=>{
    if(error){
        console.log("error in reading the file")
    }else{
        console.log("File Data:",data);
    }

})