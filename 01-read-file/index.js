const fs = require('fs');

let read = fs.createReadStream(__dirname + '/text.txt', 'utf-8');

read.on('data', function(someText) {
  console.log(someText);
});