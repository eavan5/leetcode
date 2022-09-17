/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	let l = 0,
		r = nums.length - 1
	while (l < r) {
		while (l < r && (nums[l] & 1) === 1) l++
		while (l < r && (nums[r] & 1) === 0) r--
		;[nums[l], nums[r]] = [nums[r], nums[l]]
	}
	return nums
}
