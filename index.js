const http = require('http');
const region = process.env.REGION_NAME;

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    html = "<h1>Music Stream</h1><p><strong>"+ region +"</strong>: site available</p>";
    response.end(html);
});

const port = process.env.PORT || 1337;
server.listen(port);


console.log("%s: server running at http://localhost:%d", region, port);
