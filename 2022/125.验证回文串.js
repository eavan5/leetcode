/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replaceAll(/[\W_]*/g, '').toLowerCase()
  let l = 0, r = s.length - 1
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) return false
    l++
    r--
  }
  return true
};