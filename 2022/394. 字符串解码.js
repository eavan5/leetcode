/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const countStack = [] // 这里面存前面的数字
  const strStack = [] // 这里面存待解码的字符串
  let result = ''
  let num = 0
  for (const item of s) {
    if (!isNaN(item)) { // 如果是字符串的数字
      num = num * 10 + Number(item)
    } else if (item === '[') {
      strStack.push(result)
      countStack.push(num)
      num = 0
      result = ''
    } else if (item === ']') {
      result = strStack.pop() + result.repeat(countStack.pop())
    } else {
      result += item
    }
  }
  return result
};