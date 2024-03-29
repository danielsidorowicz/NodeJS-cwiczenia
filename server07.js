import { readFile } from "fs";
import path from "path";
import { createServer } from "http";

const __dirname = path.resolve();

const PORT = 3000;
const server = createServer((req, res) => {
    const mypath = path.join(__dirname, "static", "index.html")
    readFile(mypath, (error, data) => {
        if (error) {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
            res.write("<h1>błąd 404 - nie ma pliku!<h1>");
            res.end();
        }

        else {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.write(data);
            res.end();
        }
    });
})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});