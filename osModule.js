


const os = require('os');


//info about current use

const user =  os.userInfo();
console.log(user);

//retutn the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);


// info about os

const currentOs = {
    name    : os.type(),
    release : os.release(),
    freemem : os.freemem(),
    totalmem: os.totalmem()
}

console.log(currentOs);
