var fs = require('fs')
//同步读取文件封装
function FRS(topath) {
  var fd = fs.readFileSync(topath,{flag:"r",encoding:"utf-8"})
  console.log(fd);
}
module.exports = FRS;
