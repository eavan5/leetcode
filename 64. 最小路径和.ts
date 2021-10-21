function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  // 定义DP[i][j]:指的是从[0,0] 到[i,j]的最小路径和
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // 状态初始化
  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j !== 0) {
        dp[i][j] = grid[i][j] + dp[i][j - 1];
      } else if (j === 0 && i !== 0) {
        dp[i][j] = grid[i][j] + dp[i - 1][j];
      } else if(j!==0&&i!==0){
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
}
