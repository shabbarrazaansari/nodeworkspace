const http = require('http');
const port = 4000;
function requestHandler(req,res){
    console.log(req.url);
    res.end("shabbar Ansari");
}
const server = http.createServer(requestHandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is ",port)

}); 