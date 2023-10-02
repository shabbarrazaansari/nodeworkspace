const fs = require('fs');
function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
      fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
        if (err) {
          console.log(err);
          return;git
        }
  
        console.log('data from file: ' + data); // Log the data from the file
  
        res.write("<html>");
        res.write("<head><title>enter message</title></head>");
        res.write("<body>");
  
        // Display the message content above the input field
        res.write("<p> " + data + "</p>");
  
        res.write(
          '<form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button> </form>'
        );
        res.write("</body>");
        res.write("</html>");
        return res.end();
      });
    } else if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>my title</title></head>");
      res.write("<body><h1> hello from my nodejs</h1></body>");
      res.write("</html>");
      res.end();
    }
  }
  module.exports= requestHandler;
  