let fs = require("fs")
//封装的文件读取,文件写入
let {fsRead,fsWiter} = require("../../封装/异步读取文件，写入文件/read&write")

fs.readdir('./测试目录',function (err,files) {
    if (err) {
      console.error(err)
    }else {
      // forEach循环
      files.forEach(async (item) => {
        let content = await fsRead('./测试目录/' + item)
        //写入文件
        await fsWiter('all.txt',content)
      })
    }
})
