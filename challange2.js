const fs = require('fs');
const { cloneWith } = require('lodash');
// fs.mkdir('challange2',(err, result)=>{
//     console.log("folder created");
// });

// fs.writeFile('./challange2/bio.txt','my name is xyz.',(err,result)=>{
//     console.log("file is created")
// })

// fs.appendFile('./challange2/bio.txt',' and say something about you...',(err,result)=>{
//     console.log("data appended");
// })

// fs.readFile('./challange2/bio.txt','utf-8',(err,result)=>{
//     console.log(result);
//     console.log(err);
// })

// fs.rename('./challange2/mybio.txt','./challange2/mybio2.txt',(err)=>{
//     console.log(err);
// })

fs.unlink('./challange2/mybio2.txt',(err)=>{
    console.log(err);
})
