var fs = require('fs');
/*
  flag:""中的属性如下
  r读取文件，如果文件不存在则抛出异常。
  r+读取并写入文件，如果文件不存在则抛出异常。
  rs读取并写入文件，指示操作系统绕开本地文件系统缓存。
  w写入文件，文件不存在会被创建，存在则清空后写入。
  wx写入文件，排它方式打开。
  w+读取并写入文件，文件不存在则创建文件，存在则清空后写入。
  wx+和 w+ 类似，排他方式打开。
  a追加写入，文件不存在则创建文件。
  ax与 a 类似，排他方式打开。
  a+读取并追加写入，不存在则创建。
  ax+与 a+ 类似，排他方式打开。
* */

//写入成功之后，读取文件
// function WF(path, str) {
//   //    \n 换行
//   fs.writeFile(path, str + '\n', {flag: "a+", encoding: "utf-8"}, function (error) {
//     if (error) {
//       console.log(error);
//     } else {
//       fs.readFile(path, {flag: "r", encoding: "utf-8"}, function (err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       })
//     }
//   })
// }

// WF('text3.txt', '')


//用Promise异步调用
function PromWriteFile(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path,content,{flag:"a",encoding:"utf-8"},function (err) {
      if (err) {
        reject(err)
      }else {
        resolve(err)
      }
    })
  })
}
// PromWriteFile('aaa.txt','abc')
module.exports = PromWriteFile

// async function writeList() {
//   await PromWriteFile('text3.txt', '1\n');
//   await PromWriteFile('text3.txt', '2\n');
//   await PromWriteFile('text3.txt', '3\n');
//   await PromWriteFile('text3.txt', '4\n')
//   //文件删除,删除之后无法恢复
//   await fs.unlink('text3.txt',(err) => {
//     console.log('删除成功');
//   })
//   await PromWriteFile('text3.txt', '5\n');
// }

// writeList();
