/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (+x < 0) return false
  x = x + ''
  let l = 0, r = x.length - 1
  while (l < r) {
    if (x.charAt(l) !== x.charAt(r)) return false
    l++
    r--
  }
  return true
};

console.log(isPalindrome(""));