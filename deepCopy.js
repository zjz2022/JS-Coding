//deepCopy 一
function myDeepCopy(target) {
  return JSON.parse(JSON.stringify(target))
}

const a = {
  b: 123,
}
let aa = myDeepCopy(a)
console.log(aa, a)
aa.b = 456
console.log(aa, a)
//deepCopy 二
function myDeepCopy(target) {
  let newObj = target
  if (Array.isArray(target)) {
    newObj = []
    newObj.push(
      ...target.map((item) => {
        return myDeepCopy(item)
      })
    )
  } else if (typeof target === 'object') {
    newObj = {}
    for (let key in target) {
      newObj[key] = typeof target[key] === 'object' ? myDeepCopy(target[key]) : target[key]
    }
  }
  return newObj
}

const c = {
  d: 123,
}
let cc = myDeepCopy(c)
console.log(cc, c)
cc.d = 456
console.log(cc, c)

const e = [{ f: 123 }, 1, 2, 3]
let ee = myDeepCopy(e)
console.log(ee, e)
ee[0].f = 456
console.log(ee, e)
