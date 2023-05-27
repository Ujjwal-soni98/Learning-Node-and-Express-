const http = require("http");
const server = http.createServer((req, res)=>{
    // res.end("Hello guys, server created!!");
    if(req.url == "/"){
        res.end("hello its home side..");
    } else if(req.url == "/about"){
        res.end("this is from \"about\" route");
    }
    else{
        res.writeHead(404, "Page not Found",{"content-type" : "text/html"});
        res.end(" 404 error: Page not Found");
    }


});

server.listen(5000, "127.0.0.1", () => {
    console.log("listening to the port no. 5000");
});

