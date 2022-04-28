
/*
console.log(global)

// 返回正在执行脚本文件的绝对路径
console.log(__filename)

// 返回正在执行脚本所在的目录
console.log(__dirname)

// 返回node脚本执行的目录
console.log(process.cwd())

// 提供与当前进程互动的接口
console.log(process)
*/

// 每个模块就是一个IFEE包裹的
(function() {
  console.log(this === global) // true
})(

  // require('moudle')
  // __dirname
  // __filename
  // module
  // exports
)