
const process = require('process')
// 1:资源： cpu内存

// console.log(process.memoryUsage())
// console.log(process.cpuUsage())

// 2 运行环境：运行目录  node环境 cpu架构 用户环境 系统平台

// console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
// console.log(process.env.HOME) // mac -> HOME

// 区分系统平台
// console.log(process.platform)

// 3 运行状态： 启动参数、PID、运行时间
// console.log(process.argv)
// console.log(process.argv0) // node

// console.log(process.execArgv)

// console.log(process.pid)

// 当前脚本运行的总时间
// console.log(process.uptime())

// 模拟耗时
// setTimeout(() => {
//   console.log(process.uptime())
// }, 3000)

// 4 事件
process.on('exit', function(code) {
  console.log('exit ' + code)

  setTimeout(() => {
    console.log(1233)  // 不会执行，exit回调中只能执行同步代码
  }, 1000);
})

process.on('beforeExit', function(code) {
  console.log('beforeExit ' + code)
  setTimeout(() => {
    console.log(1233)  // 可以执行异步操作。但是一直会循环下去，不会导致程序退出
    process.exit() // 可以调用手动退出方法退出程序
  }, 1000);
})
console.log('代码执行完成')