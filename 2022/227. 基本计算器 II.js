/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = []
  s += '+'
  let preSym = '+'
  let pre = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') { // 一定要用字符串的数字,否则空字符串‘ ’会等于数字0
      pre = pre * 10 + Number(s[i])
    } else if (s[i] === ' ') {
      continue
    } else {
      if (preSym === '+') {
        stack.push(+pre)
      } else if (preSym === '-') {
        stack.push(-pre)
      } else if (preSym === '*') {
        stack[stack.length - 1] = stack[stack.length - 1] * pre
      } else {
        stack[stack.length - 1] = (stack[stack.length - 1] / pre) >> 0
      }
      pre = 0
      preSym = s[i]
    }
  }
  return stack.reduce((p, c) => p + c)
};