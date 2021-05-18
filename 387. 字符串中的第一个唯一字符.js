/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      return i
    }
  }
  return -1
};