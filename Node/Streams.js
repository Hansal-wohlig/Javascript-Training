// //creating big file
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 1000000; i++) {
//   writeFileSync('./big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

const {createReadStream} = require('fs')

const stream = createReadStream("./big.txt",{
    highWaterMark:90000,
    encoding:'utf8'
})

stream.on("data",(result)=>{
    console.log(result)
})

stream.on("error",(err)=>{
    console.log(err)
})

var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    const filestream = fs.createReadStream("./big.txt", "utf8")
    filestream .on("open",()=>{
        filestream.pipe(res)
    })
    filestream.on("error",(err)=>{
        res.end(err)
    })
}) .listen(5000)