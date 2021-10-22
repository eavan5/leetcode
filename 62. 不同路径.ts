function uniquePaths(m: number, n: number): number {
  // dp[i][j]为从洗标(0,0)开始到(i,j)总共的路径数目为dp[i][j]
  const dp: number[][] = new Array(m).fill(0).map(() => []);
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

console.log(uniquePaths(2, 1));
