const path = require('path');
// console.log(path.dirname('C:/Users/Ujjwal/Desktop/node.js/Learning-Node-and-Express-/path-module/path.js'));
// console.log(path.extname('C:/Users/Ujjwal/Desktop/node.js/Learning-Node-and-Express-/path-module/path.js'));
// console.log(path.basename('C:/Users/Ujjwal/Desktop/node.js/Learning-Node-and-Express-/path-module/path.js'));
const pathName = path.parse('C:/Users/Ujjwal/Desktop/node.js/Learning-Node-and-Express-/path-module/path.js');
console.log(pathName.name);

