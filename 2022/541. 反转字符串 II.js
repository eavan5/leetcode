/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = ''
  for (let i = 0; i < s.length; i += k * 2) {
    res += s.substr(i, k).split('').reverse().join('') + s.substr(i + k, k)
  }
  return res
};