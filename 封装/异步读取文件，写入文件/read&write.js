let fs = require('fs')
//异步读取文件封装
function fsRead(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path,{flag:"r",encoding:"utf-8"},(err,data) => {
      if (err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}
//异步写入文件封装
function fsWiter(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path,content,{flag:"a",encoding:"utf-8"},(err) => {
      if (err) {
        reject(err)
      }else {
        resolve(err)
      }
    })
  })
}

//导出
module.exports = {fsRead,fsWiter}
