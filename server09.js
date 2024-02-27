import { readFile, readFileSync } from "fs";
import path from "path";
import { createServer } from "http";

const __dirname = path.resolve();

const PORT = 3000;
const server = createServer((request, response) => {
    if (request.url == "/first") {
        const mypath = path.join(__dirname, "static", "first.html")
        readFile(mypath, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        })
    } else if (request.url == "/second") {
        const mypath = path.join(__dirname, "static", "second.html")
        readFile(mypath, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        })
    } else if (request.url == "/both.css") {
        const mypath = path.join(__dirname, "static", "both.css")
        readFile(mypath, (error, data) => {
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(data);
            response.end();
        })
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write("<h1>404 - brak takiej strony</h1>");
        response.end();
    }
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});