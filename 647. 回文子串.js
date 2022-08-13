var countSubstrings = function (s) {
  const dp = Array.from({ length: s.length }, () => Array.from({ length: s.length }, () => false))
  let count = 0
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j]) {
        if (j - i <= 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true
          count++
        }
      }
    }
  }
  return count
};


// 思路进本和第五题差不多