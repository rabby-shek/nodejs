const path = require('path');


// seperator checking in my device
console.log(path.sep);

//joining the files

const filePath = path.join('/content', '/subfolder1', 'test.txt');

console.log(filePath);

//base file name

const base = path.basename(filePath);


console.log(base);

//absolute file path

const absolute = path.resolve(__dirname,'content','subfolder1','test.txt');

console.log(absolute);
