import { readFile, readFileSync } from "fs";
import path from "path";
import { createServer } from "http";

const __dirname = path.resolve();

const PORT = 3000;
const server = createServer((req, res) => {
    let urlurl = decodeURI(req.url).toLowerCase()
    if (urlurl == "/mąż") {
        const mypath = path.join(__dirname, "static", "mąż.jpg")
        let img = readFileSync(mypath);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(img, 'binary');
    } else if (urlurl == "/wąż") {
        const mypath = path.join(__dirname, "static", "wąż.jpg")
        let img = readFileSync(mypath);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(img, 'binary');
    } else if (urlurl == "/książ") {
        const mypath = path.join(__dirname, "static", "książ.jpg")
        let img = readFileSync(mypath);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(img, 'binary');
    }

})

server.listen(3000, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});