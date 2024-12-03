const fs = require('fs');

console.log('start');


// Synchronous Code / Blocking I/O Model
const data = fs.readFileSync('./file.txt', 'utf-8');
console.log('data:', data);

console.log('end');


/* OUTPUT
  start
  data: Hello World!
  end
*/