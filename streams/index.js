//Handle stream events---> data, end and error.
const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request",(req,res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // })

    //now its the way to read the data through stream in node.js
    
    // const stream = fs.createReadStream("input.txt");

    // stream.on("data", (chunk)=>{
    //     res.write(chunk);
    // });
    // stream.on("end", ()=>{
    //     res.end();
    // });
    // stream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // });
    // stream.on("finish",()=>{
    //     res.end("finished!")
    // })


    //2nd way to stream data in node.js

    const stream = fs.createReadStream("input.txt");
    stream.pipe(res);
});

server.listen(5000,"127.0.0.1");

