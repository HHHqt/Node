//导入readline包
let readLine = require("readline")
//封装的文件读取,文件写入
let {fsRead,fsWiter} = require("../../封装/异步读取文件，写入文件/read&write")
//实例化接口对象
let r1 =  readLine.createInterface({
  input:process.stdin,
  output:process.stdout,
})

//提问接口
// r1.question("晚上吃什么？",answer => {
//   console.log(answer);
//   // r1.close();//不加close程序不结束
// })

//封装Promise提问接口
function question(title) {
  return new Promise((resolve, reject) => {
    r1.question(title,answer => {
      resolve(answer)
      // r1.close();//不加close程序不结束
    })
  })
}

async function createPackage () {
  let name =  await question('你的包名叫什么？');
  let description =  await question('你的包该如何描述？');
  let main = await question('你的入口是什么？');
  let author = await question('你的名字是什么？');
  let content =`{
  "name": "${name}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "${main}",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "${author}",
  "license": "ISC"
}`;

  await fsWiter('package_text.json',content);
  let json_content =  await fsRead('package_text.json')
  console.log(json_content);
  r1.close();
}
createPackage();
//
r1.on("close", ()=> {
  process.exit(0)
})
