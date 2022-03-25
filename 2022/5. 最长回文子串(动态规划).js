var longestPalindrome = function (s) {
  const dp = Array.from({ length: s.length }, () => Array(s.length).fill(false))
  const len = s.length
  let index = 0
  let maxLen = 1
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 0; j < len; j++) {
      if (s[i] === s[j]) {
        if ((j - i) <= 2) {
          dp[i][j] = true
        } else if (j - i > 2) {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j] && maxLen < j - i + 1) {
        index = i
        maxLen = j - i + 1
      }
    }
  }
  return s.substr(index, maxLen)
};


console.log(longestPalindrome("cbbd"));