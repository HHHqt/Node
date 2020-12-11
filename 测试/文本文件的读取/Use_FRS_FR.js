var FRS = require('./fs_readFile_Sync')
var FR = require('./fs_readFile')
//使用同步和异步封装读取文件
FRS('hello.txt')
FR('hello.txt')
