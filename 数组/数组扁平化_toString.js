// 扁平化
// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：

// var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]
// 知道了效果是什么样的了，我们可以去尝试着写这个 flatten 函数了

// toString
// 如果数组的元素都是数字，那么我们可以考虑使用 toString 方法，因为：

// [1, [2, [3, 4]]].toString() // "1,2,3,4"
// 调用 toString 方法，返回了一个逗号分隔的扁平的字符串，这时候我们再 split，然后转成数字不就可以实现扁平化了吗？

// 方法2
var arr = [1, [2, [3, 4]]]

function flatten(arr) {
  return arr
    .toString()
    .split(',')
    .map(function (item) {
      return +item
    })
}

console.log(flatten(arr))
// 然而这种方法使用的场景却非常有限，如果数组是 [1, '1', 2, '2'] 的话，这种方法就会产生错误的结果。
