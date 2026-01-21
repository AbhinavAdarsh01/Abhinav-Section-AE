const http = require('http');

let hostname = '127.0.0.1';
let port = 8080;

let server = http.createServer((req, res) => {
  if(req.url === "/"){
    res.setHeader("Content-Type", "text/plain");
    res.write("This id the main page");
  }else if(req.url === "/about_us"){
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>This is my about us page<h1>");
  }else if (req.url === "/contact"){
    res.setHeader("Content-type", "text/plain");
    res.write("This is contact us page");
  }else{
    res.write("404 Page Not Found");
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
  
});
