let fs = require("fs")

/*
* 1.创建读取流
*     语法：fs.createReadStream(文件路径，{可选的配置操作})
* */
let createReadStream = fs.createReadStream('hello.txt',{flags:"r",encoding:"utf-8"})//文本，文字：utf-8
// let createReadStreamVideo = fs.createReadStream('cat.mp4',{flags:"r"})//视频，图片，音频：二进制
// let createWriteWtreamVideo = fs.createWriteStream('cat2.mp4',{flags:"w"})//写入视频，图片，音频

//监听读取的文件打开
createReadStream.on('open',() => {
  console.log('读取的文件打开');
})
//监听读取的文件关闭
createReadStream.on('close',() => {
  console.log('读取流关闭');
})

//每一批数据流入完成
createReadStream.on('data',content => {
  console.log('单批数据流入');
  console.log(content);
})



// //监听读取的视频打开
// createReadStreamVideo.on('open',() => {
//   console.log('读取的视频文件打开');
// })
// //监听读取的视频关闭
// createReadStreamVideo.on('close',() => {
//   createWriteWtreamVideo.end();//写入关闭
//   console.log('读取视频流关闭');
// })

//每一批数据流入完成
// createReadStreamVideo.on('data',content => {
//   console.log('单批数据流入',content.length);
//   console.log(content);
//   createWriteWtreamVideo.write(content,(err) => {
//     if(err) {
//       console.log(err);
//     }else {
//       console.log('单批数据写入完成');
//     }
//   })
// })
