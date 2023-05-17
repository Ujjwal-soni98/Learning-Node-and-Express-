const os = require('os');
console.log(os.arch());    
// console.log(os.freemem());
//EOL stands for end of line
console.log("Paragraphs always contains EOL" + os.EOL + "for windows it is \\r \\n" + os.EOL + "for POSIX it is \\n");

const freeMemory = os.freemem();
console.log(`${freeMemory}`/1024/1024/1024);

const totalMemory = os.totalmem();
console.log(`${totalMemory}`/1024/1024/1024);

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.version());
console.log(os.tmpdir());
console.log(os.machine());
console.log(os.type());