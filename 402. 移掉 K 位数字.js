/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = []
  for (let i = 0; i < num.length; i++) {
    const c = num[i]
    while (stack.length && stack.at(-1) > c && k) {
      stack.pop()
      k--
    }
    if (c !== '0' || stack.length !== 0) {
      stack.push(c)
    }
  }
  while (k--) {
    stack.pop()
  }
  return stack.length <= 0 ? '0' : stack.join("")
};