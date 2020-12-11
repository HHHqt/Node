var fs = require('fs')
//异步读取文件封装
function FR(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path,{flag:"r",encoding:"utf-8"},function (err,data) {
      if (err) {
        reject(err);
      }else {
        resolve(data)
      }
    })
  })
}
module.exports = FR
