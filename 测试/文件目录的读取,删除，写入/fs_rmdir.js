let fs = require("fs")
//删除目录
// fs.rmdir('./测试目录/测试删除目录',(err) => {
//   if (err) {
//     console.log(err)
//   }else {
//     console.log('删除成功');
//   }
// })

//简易封装
function delDir (path) {
  fs.rmdir(path,(err) => {
    if (err) {
      console.log(err)
    }else {
      console.log('删除成功');
    }
  })
}
delDir('./测试目录/a')//使用
