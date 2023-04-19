const _=require('lodash');
const { flattenDeep } = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hi")
var a=4 , b=6;
var c= a+b;
console.log(c);
