/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let result = Number.MIN_SAFE_INTEGER,
		count = 0
	for (let i = 0; i < nums.length; i++) {
		count += nums[i]
		if (result < count) {
			result = count
		}
		if (count < 0) {
			// 重新开始计算
			count = 0
		}
	}
	return result
}
