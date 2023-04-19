const hi = require('http');
hi.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application/json'});res.write(JSON.stringify({name:'ujjwal',email:'ujjwal.2125cs1121@kiet.edu'}));
    res.end();
}).listen(7000);