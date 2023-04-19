const http=require('http')
const server = http.createServer((req,res)=>{
//     console.log(req);
    // if(req.url==='/'){
    //     res.end('Welcome to our Home Page')
    // }
    // if(req.url==='/about'){
    //     res.end('Here is our History')
    // }
//     res.write('welcome')
//     res.end()
// })

if(req.url==='/'){
    res.end('Welcome to our Home Page');
}
if(req.url==='/about'){
    res.end('Here is our short summary');
}
res.end(
`<h1>Oops!</h1>
<p>We can't seem to find out the page you are looking for</p>
<a href='/'>back home</a>`)
})
server.listen(5000)