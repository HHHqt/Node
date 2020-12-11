//封装Promise读取文件
var fs = require('fs')
function PromiseFR(path) {
  return new Promise(function (resolve,reject) {
    fs.readFile(path,{flag:"r",encoding:"utf-8"},function (err,data) {
      if (err) {
        //失败时
        reject(err)
      }else {
        //成功时
        resolve(data)
      }
    })
  }).catch(error => console.log('caught', error))//不加会报错
}

var R1 = PromiseFR('hello.txt')
R1.then(function (res) {
  console.log(res);
})

async function ReadList() {
  var file1 = await PromiseFR('hello.txt');
  console.log(file1.length);
  var file2 = await PromiseFR(file1.trim() + '.txt');
  var file3 = await PromiseFR(file2.trim() + '.txt');
  // .trim()去掉字符串左右两边的结束符/空白符
  console.log(file3);
}
ReadList();
