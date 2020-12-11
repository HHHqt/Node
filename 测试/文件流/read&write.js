let fs = require("fs")

//读取流
let createReadStream = fs.createReadStream('cat.mp4',{})
//写入流
let createWriteStream = fs.createWriteStream('cat3.mp4',{})

//管道流
createReadStream.pipe(createWriteStream)
