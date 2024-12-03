// const fs = require("node:fs");
// const crypto = require("node:crypto");

// console.log("First");

// Synchronous Code or Blocking I/O Model
// const fileContent = fs.readFileSync("./hello.txt", "utf-8");
// console.log("File Content: "+fileContent);

// Asynchronous Code or Non-Blocking I/O Model
// fs.readFile("./hello.txt", "utf8", (err, data)=>{
//   if(err) console.log("Error: "+err);
//   else console.log("Data: "+data);
// });


// console.log("Second");

// process.env.UV_THREADPOOL_SIZE = 5;


// CPU task intensive
// const start = performance.now();

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", ()=>{
//   console.log("End of PBKDF2 ms", performance.now()-start);
// });

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", ()=>{
//   console.log("End of PBKDF2 ms", performance.now()-start);
// });

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", ()=>{
//   console.log("End of PBKDF2 ms", performance.now()-start);
// });

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", ()=>{
//   console.log("End of PBKDF2 ms", performance.now()-start);
// });

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", ()=>{
//   console.log("End of PBKDF2 ms", performance.now()-start);
// });


// ======================================================


// HTTP request and response in Nodejs


// const http = require("node:http");

// const server = http.createServer((req, res)=>{
//   console.log("Request", req.url);
//   if(req.url==="/") res.end("Home Page");
//   else if(req.url==="/about") res.end("About Page");
//   else res.end("Not Found Page");
// });

// server.listen(3001, ()=>{
//   console.log("Listening on port 3001");
// });


/*

  * Searching Topics: IMPORTANT
  - LibuV
  - Thread Pool
  - OS Kernals
  - Callback and Event Loop
  - Call Stack & Callback Queue
  - CallBack Phases
  - Create Http Server

*/