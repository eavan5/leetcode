/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // const element = s.charAt(i);
    helper(i, i) // 如果回文是奇数
    helper(i, i + 1) //偶数
  }
  function helper (m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    if (n - m - 1 > res.length) {
      res = s.slice(m + 1, n)
    }
  }
  return res
};

