
var minDistance = function (l1, l2) {
  let len1 = l1.length, len2 = l2.length
  let dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0))
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= len2; i++) {
    dp[0][i] = i
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (l1[i - 1] == l2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
      }
    }
  }
  return dp[len1][len2]
};