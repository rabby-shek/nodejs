const fs = require('fs');


const readFirstFile = fs.readFileSync('./content/first.txt','utf8');

console.log(readFirstFile);

fs.writeFileSync('./content/newTxtFile.txt','this file text is updated');
