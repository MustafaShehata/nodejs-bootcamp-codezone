const http = require("node:http");
const fs = require("node:fs");

const hostname = "localhost";

const homePage = fs.readFileSync("./views/index.html", "utf8");
const cssFile = fs.readFileSync("./views/style.css", "utf8");

const server = http.createServer((req, res) => {
  // res.write("Hello, World!");
  // res.write("<h1>Hello, World!</h1>"); // Sending HTML file

  // Writing Json file but make sure to write it in string.
  // res.write(JSON.stringify({
  //   id: 1,
  //   name: "Ahmed"
  // }));

  console.log("========= req.url ========");
  console.log(req.url);

  if (req.url === "/") {
    res.write(homePage);
  } else if (req.url === "/about") {
    res.write("<h1>About Page</h1>");
  } else if (req.url === "/style.css") {
    res.write(cssFile);
  } else {
    res.statusCode = 404; // Not Found Page
    res.write("<h1>Not Found Page</h1>");
  }

  // res.end(
  // "<h1>Hello World!</h1>"
  // );

  // res.write(JSON.stringify({
  //   id: 1,
  //   name: "Ahmed"
  // }));

  res.end();
});

server.listen("5000", hostname, () => {
  console.log("Listening on port: 5000");
});