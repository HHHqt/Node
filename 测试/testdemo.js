'use strict'
var hello = `你好`
function hellohuman(name) {
  console.log(hello + name)
}
module.exports = hellohuman;
class User {
  constructor() {
    this.username = '胡春如';
    this.password = 123456;
  }
}
var U1 = new User()
console.log(U1);
