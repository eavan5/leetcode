/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
	let len = nums.length,
		maxLen = 0,
		maxCount = 0
	const dp = new Array(len).fill(1)
	const counts = new Array(len).fill(1)
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				if (dp[j] + 1 > dp[i]) {
					dp[i] = dp[i] + 1
					counts[i] = counts[j]
				} else if (dp[j] + 1 === dp[i]) {
					counts[i] += counts[j]
				}
			}
		}
		if (dp[i] > maxLen) {
			maxLen = dp[i]
			maxCount = counts[i]
		} else if (dp[i] === maxLen) {
			maxCount += counts[i]
		}
	}
	return maxCount
}
