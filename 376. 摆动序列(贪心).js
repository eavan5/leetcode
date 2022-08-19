/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	let pre = 0,
		cur = 0,
		res = 1
	for (let i = 0; i < nums.length - 1; i++) {
		cur = nums[i + 1] - nums[i]
		if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
			res++
			pre = cur
		}
	}
	return res
}
