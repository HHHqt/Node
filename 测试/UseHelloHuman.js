'use strict'
var hellohuman = require('./testdemo');
var s = '邵雨琪';
hellohuman(s);
process.nextTick(
    function () {
      console.log('你好呀')
    }
);
process.on('exit',function (end) {
  console.log('你哈' + end);
})
if (typeof(window) === 'undefined') {
  console.log('node.js');
} else {
  console.log('browser');
}
