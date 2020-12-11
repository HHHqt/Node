let fs = require('fs')

/*
* 1.创建写入流
*     语法：fs.createWriteStream(文件路径，{可选的配置操作})
* */
let createWriteStream = fs.createWriteStream('hello.txt',{flags:"w",encoding:"utf-8"});
console.log(createWriteStream);
