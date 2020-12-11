let fs = require('fs')

/*
* 1.创建写入流
*     语法：fs.createWriteStream(文件路径，{可选的配置操作})
* */
let createWriteStream = fs.createWriteStream('hello.txt',{flags:"w",encoding:"utf-8"});
console.log(createWriteStream);

//监听文件打开事件
createWriteStream.on('open',() => {
  console.log('文件打开');
});
//监听准备事件
createWriteStream.on('ready',() => {
  console.log('文件已准备就绪');
});
//监听文件关闭事件
createWriteStream.on('close',() => {
  console.log('文件写入完成，已关闭');
});


//文件流式写入
createWriteStream.write('hello,world!',(err) => {
  if (err) {
    console.log(err);
  }else {
    console.log('内容流入完成');
  }
});
createWriteStream.end(() => {
  console.log('文件写入关闭');
});
