const http = require('http');
const port = 4000;
function requestHandler(req,res){
    if (req.url === '/home') {
        res.end("Welcome home");
    } else if (req.url === '/about') {
        res.end("Welcome to About Us page");
    } else if (req.url === '/node') {
        res.end("Welcome to my Node Js project");
    } else {
        // Handle other URLs or send a default response
        res.end("Page not found");
    }
}

const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is ",port)

}); 