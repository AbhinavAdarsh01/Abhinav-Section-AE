const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    const data = new Date().toLocaleDateString();
    const logMessage = `${data} - ${req.url} : New request received`;
    console.log(logMessage);

    fs.appendFile("log_entry.txt", logMessage + "\n", (error) => {
        if (error) console.log(error);
    });

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("home_page");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("about/us");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }
});

server.listen(port, () => {
    console.log(`Server is up at http://localhost:${port}`);
});