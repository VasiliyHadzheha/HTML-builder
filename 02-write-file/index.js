const fs = require('fs');
const { stdin, stdout } = process;
const path = require('path');
const output = fs.createWriteStream(path.join(__dirname, 'write.txt'));
stdout.write('Yes sir?\n');
stdin.on('data', data => {
  const dataString = data.toString();
  if (dataString.trim() === 'exit') {
    return process.exit()
  }  else {
    output.write(data);
  }
});
process.on('exit', () => stdout.write('Goodbye'));
process.on('SIGINT', () => process.exit());