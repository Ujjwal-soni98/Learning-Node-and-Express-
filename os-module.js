const os =require('os');
const user = os.userInfo();
console.log(user);
console.log(os.uptime());
const currentOs={
    release:os.release(),
    name:os.type(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)