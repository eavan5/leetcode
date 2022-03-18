/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let i = 0
  while (i < s.length) {
    if (i - 1 >= 0 && s[i - 1] === s[i]) {
      s = s.slice(0, i - 1) + s.slice(i + 1)
      i = 0
    }
    i++
  }
  return s
};


console.log(removeDuplicates("abbaca"));