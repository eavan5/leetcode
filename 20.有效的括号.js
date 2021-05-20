/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const element = s[i]
    const matchVal = map.get(element)
    if (matchVal) {
      stack.push(matchVal)
    } else {
      if (stack.pop() !== element) return false
    }
  }
  return stack.length === 0
};

console.log(isValid("()"));