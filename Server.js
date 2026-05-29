const http = require("http");   
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log("Request Received");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    let path = req.url;
    if (path === "/") {
        path = "./docs/index.html";
    } else if (path === "/home") { 
        res.setHeader('Location', '/');
        res.statusCode = 302;
        res.end();
    }
    else if (path === "/contact") {
        path = "./docs/contact.html";
    } else if (path === "/about") {
        path = "./docs/about.html";
    } else {
        path = "./docs/404.html";
        res.statusCode = 404;
    }

    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
});    

server.listen(3000, "localhost", () => {
    console.log("Server is running on http://localhost:3000");
});