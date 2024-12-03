const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const app = express();

// const homePage = fs.readFileSync("./views/index.html", "utf8");
// app.use(express.static("./views"));

// function logger(req) {
//   console.log("METHOD: "+req.method+",\tURL: "+req.url);
// }


// app.use((req, res, next) => {
//   console.log("Method: " + req.method + ",\tUrl:" + req.url);
//   next();
// });


// app.use("/about", (req, res, next) => {
//   console.log("Method: " + req.method + ",\tUrl:" + req.url);
//   next();
// });


app.use((req, res, next) => {
  console.log("MIDDLEWARE 1");
  console.log("Method: " + req.method + ",\tUrl:" + req.url);
  next();
});

app.use((req, res, next) => {
  console.log("MIDDLEWARE 2");
  next();
});

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello from about page");
});

app.get("/products", (req, res) => {
  res.send([
    {id: 1, title: "product 1"},
    {id: 2, title: "product 2"}
  ]);
});

app.listen("5001", () => {
  console.log("Listening on port 5001");
});