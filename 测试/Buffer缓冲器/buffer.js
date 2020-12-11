
var str = 'HelloWorld'
//将字符串转成buffer对象
var buf = Buffer.from(str)
console.log(buf)
//输出buffer内容
console.log(buf.toString());

//开辟一个空的buffer(缓存区)
let buf1 = Buffer.alloc(10);//安全,但效率低
// buf1[0] = 20;
console.log(buf1);

let buf2 = Buffer.allocUnsafe(10);//不安全,但效率高
console.log(buf2);
