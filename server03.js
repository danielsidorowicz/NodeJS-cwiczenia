import { createServer } from "http";
const PORT = 3000;
const server = createServer((req, res) => {
    // console.log("nagłówki żądania:")
    // console.log(JSON.stringify(req.rawHeaders, null, 5))
    let headers = req.headers["user-agent"]
    let headSplit = headers.split(" ")
    // console.log(headSplit[headSplit.length - 1])
    let headSplitSplit = headSplit[headSplit.length - 1].split("/")
    if (headSplitSplit[0] == "Firefox") {
        console.log("Firefox")
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
        res.end(`<h1>To jest Firefox</h1>`)
    } else if (headSplitSplit[0] == "Edg") {
        console.log("Edge")
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
        res.end(`<h1>To jest Edge</h1>`)
    } else {
        console.log("Chrome")
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" })
        res.end(`<h1>To jest Chrome</h1>`)
    }

})

server.listen(PORT, () => {
    console.log(`serwer startuje na porcie ${PORT}`)
});