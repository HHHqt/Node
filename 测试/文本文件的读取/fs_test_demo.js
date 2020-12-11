var fs = require('fs');//导入文件模块
//node,读写文件也有同步和异步的接口，

//同步      fs.openSync(path[, flags, mode])   fs.readSync(fd, buffer, offset, length, position)
var content = fs.readFileSync('hello.txt', {flag: 'r',encoding:'utf-8'});
console.log(content);

//异步
fs.readFile('hello.txt',{flag:"r",encoding:"utf-8"},function (err,data) {
      if (err) {
        console.log(err);
      }else {
        console.log(data);
      }
})

console.log(123);
