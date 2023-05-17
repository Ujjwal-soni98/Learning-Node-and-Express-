//this is the file linked with 5-utils.js and 3-module.js
const secret ='super secret';
const john='john';
const peter= 'peter'; 
//console.log(module)
const sub = (x,y) => {
    return x-y;
}
const add = (x,y) => {
    return x+y;
}
module.exports={ john, peter, add, sub}