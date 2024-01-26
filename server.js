const http = require('http')



const node = http.createServer(function (req, res) {


    console.log(req)

    if (req.method === "GET" && req.url === "/") {
        const html = '<h1> Hello Node</h1>\n'
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    }


    if (req.method === "POST" && req.url === "/") {
        let body = ""
        req.on("data", function (data) { body += data })
        req.on("end", function () {
            const object = JSON.parse(body)
            const html = '<h1> Hello' +object.key+ 'Node</h1>\n'
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html);
            res.end();
        })
    }})


const PORT = 3000

node.listen(PORT, function () {
    console.log(`localhost listening on port ${PORT}`);
}
);