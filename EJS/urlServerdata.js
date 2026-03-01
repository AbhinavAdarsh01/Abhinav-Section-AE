// Pass the data using the url
// Syntax of URL: http://localhost:8080/?msg-helloeworld
const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3000;


const server = http.createServer((req, res)=>{
    let message = url.parse(req.url, true).query;

    if(message.msg){
        fs.writeFile("urlData.txt", message.msg, (err) => {
            if(err){
                res.end("Error writing to file");
                return;
            }
        });
        res.writeHead(200,{"Content-type": "text/plain"});
        res.end("Data recevied and saved to urlData.txt");
    }
});
server.listen(port,()=>{
    console.log(`Server is up at http://localhost:${port}`);
});

