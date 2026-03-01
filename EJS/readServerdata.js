// Display data on server through file

const http = require("http");
const fs = require("fs");
const port = 8080;


const server = http.createServer((req,res)=>{
    fs.readFile("serverData.txt", "utf-8" , (err,data)=>{
        if(err){
            res.end("file not found")
        }else{
            res.writeHead(200,{"content-type": "text/plain"});
        res.end(data)
        }
    })
});
server.listen(port,()=>{
    console.log(`Server is up at http://localhost:${port}`);
})