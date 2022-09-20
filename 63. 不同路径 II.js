/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length,
		n = obstacleGrid[0].length,
		dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
	dp[0][0] = obstacleGrid[0][0] ? 0 : 1 // 定义起始点
	for (let i = 1; i < m; i++) {
		dp[i][0] = obstacleGrid[i][0] || dp[i - 1][0] === 0 ? 0 : 1
	}
	for (let i = 1; i < n; i++) {
		dp[0][i] = obstacleGrid[0][i] || dp[0][i - 1] === 0 ? 0 : 1
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = obstacleGrid[i][j] ? 0 : dp[i - 1][j] + dp[i][j - 1]
		}
	}
	return dp.at(-1).at(-1)
}
