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
    if (map.has(element)) {
      stack.push(map.get(element))
    } else {
      if (stack.pop() !== element) return false
    }
  }
  return !stack.length
};

console.log(isValid("()"));