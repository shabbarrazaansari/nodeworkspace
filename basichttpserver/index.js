const http = require("http");
//const fs = require("fs");
const port = 4000;
const routes = require('./routes') ;


const server = http.createServer(routes);

server.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server is listening on port", port);
});
