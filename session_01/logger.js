// const url = 'http://mylogger.io/log';

// console.log("This is a logger file");

function log(message) {
  // Send an HTTP request
  console.log(message);
}

function log2(message) {
  console.log('This is a message from logger2:', message);
}

function log3(message){
  console.log('This is a message from logger3:', message);
}



// exports.addNumbers = (n1, n2) => {
//   console.log(n1+n2);
// }

export {
  log,
  log2
}


// module.exports = log;