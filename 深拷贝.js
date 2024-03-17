function debounce(fn) {
  let timeout = null // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout) // 每当用户输入的是够把前一个 setTimeout clear 掉
    timeout = setTimeout(() => {
      // 然后又创建一个新的 setTimeout，这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行fn函数
      fn.apply(this, arguments)
    }, 500)
  }
}
function sayHi() {
  console.log('防抖成功')
}
// 获取输入框dom节点
const inp = document.getElementById('inp')
// 监听inpu输入框的变化
inp.addEventListener('input', debounce(sayHi)) //防抖
