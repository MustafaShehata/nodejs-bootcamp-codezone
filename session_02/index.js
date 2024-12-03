// const fs = require("node:fs");


// read file

// Blocking I/O or synchronous
// const fileContent = fs.readFileSync("./hello.txt", "utf8");
// console.log("First Statement");
// console.log("File Content: " + fileContent);
// console.log("Second Statement");

//------------------------------------------------------
// console.log("first statement");

// // Non Blocking I/O or Asynchronous
// fs.readFile("./hello.txt", "utf8", (err, data) => {
//   if (err) console.log("error", err);
//   else console.log("Data: "+data);
// });

// console.log("second statement");

/* Expected Output
  first statement
  second statement
  Data: hello world
*/

// write to file

// fs.writeFile("./test-user.json", JSON.stringify([{id: 1, name: "Ahmed"}]), "utf8", (err) => {
//   if(err) console.log("Error writing file", err);
//   else console.log("Done");
// });


// delete file

// fs.unlink("./test-user.json", (err) => {
//   if (err) console.log("Error deleting file");
// });


// What is utf8?

// const charA = Buffer.from("a"); // hex number
// console.log(charA); // 61 hex number => 97 decimal number of "a"

// const charZ = Buffer.from("z");
// console.log(charZ); // 7a hex number => 122 decimal number of "z"


// * if you didn't write utf8 for charset or encoding the will return buffer hex number of file

// What is a buffer?

// console.log("V".charCodeAt()); // 86


// What is a stream?


// What is a npm?

// nodemon


// creating cli tool in codeZone-courses-manager
