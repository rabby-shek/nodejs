
const fs = require('fs');


console.log('starting the task');

const readFirstFile = fs.readFileSync('./content/first.txt','utf8');

console.log(readFirstFile);

fs.writeFileSync('./content/newTxtFile.txt','this file text is updated');

console.log('the task is done');
console.log('starting next task');


//async file reading system
console.log('starting the second task');
fs.readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log('the second task is done');
});

console.log('task complete');