const fs = require("fs");

const requestHandler = (req, res) => {
  //  console.log(req.url, req.method, req.headers);

  // Event loop, exit the program
  // process.exit();

  const { url, method } = req;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enteder Message using Copilot</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page using Copilot</title></head>");
  res.write(
    "<body><h1>Hello from my Node.js Server (Copilot wins)!</h1></body>"
  );
  res.write("</html>");
  res.end();
};

//Option 1
module.exports.handler = requestHandler;
module.exports.someText = "Some hard coded text here";

//Option 2
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text here",
// };

//Option 3
// exports.handler = requestHandler;
// exports.someText = "Some hard coded text here";
