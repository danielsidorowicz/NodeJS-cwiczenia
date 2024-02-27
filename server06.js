import { createServer } from "http";
import tracer from "tracer"

const logger = tracer.colorConsole();
const PORT = 3000;

const server = createServer((req, res) => {
    // console.log(decodeURI(req.url))
    if (decodeURI(req.url) == "/żółć") {
        logger.warn("hello");
    } else if (decodeURI(req.url) == "/zieleń") {
        logger.info("hello");
    } else if (decodeURI(req.url) == "/czerwień") {
        logger.error("hello");
    }// else {
    //     logger.log("hello")
    // }
    res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
    res.end(`<h1>patrz konsola</h1>`)
})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});