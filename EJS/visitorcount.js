const http =require("http");
const port = 8080;

let visitor = 0;

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        visitor++;
        res.writeHead(200,{"Content-type": "text/plain"});
        res.write(`Visitor Count: ${visitor}`);
        res.end();
    }
});

server.listen(port,()=>{
    console.log(`Server is up at http://localhost:${port}`);
})