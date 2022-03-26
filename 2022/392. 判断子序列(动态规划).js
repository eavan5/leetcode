var isSubsequence = function (s, t) {
  // dp[i][j] 为当s的长度为i和t的长度为j的时候是否是子序列
  const dp = Array.from(Array(s.length + 1), () => Array(t.length + 1).fill(false))
  dp[0].forEach((item, index) => dp[0][index] = true)
  console.log(dp);
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  return dp[s.length][t.length]
};