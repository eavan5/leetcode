/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const len = needle.length
  for (let i = 0; i < haystack.length - len; i++) {
    const element = haystack.substr(i, len);
    if (element === needle) return i
  }
  return -1
};