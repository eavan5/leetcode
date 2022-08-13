/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
	const dp = Array(matrix.length)
	let res = 0
	for (let i = 0; i < matrix.length; i++) {
		dp[i] = Array(matrix[i].length).fill(0)
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 1) {
				if (i == 0 || j == 0) {
					dp[i][j] = 1
				} else {
					dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				}
			}
			res = Math.max(res, dp[i][j])
		}
	}
	return res ** 2
}
