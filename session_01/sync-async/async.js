const fs = require('fs');

console.log('start');


// Async / Non-blocking I/O Model
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if(err) console.log("ERROR: ", err);
  else console.log("file.txt data:", data);
});

console.log('end');


/* OUTPUT
  start
  end
  file.txt data: Hello World!
*/
