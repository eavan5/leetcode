/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let res = Infinity,
		sum = 0,
		j = 0
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		while (sum >= target) {
			res = Math.min(res, i - j + 1)
			sum -= nums[j]
			j++
		}
	}
	return res === Infinity ? 0 : res
}
