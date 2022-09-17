/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	let l = 0,
		r = nums.length - 1
	while (l < r) {
		if (nums[l] % 2 === 0) {
			;[nums[l], nums[r]] = [nums[r], nums[l]]
			r--
		} else {
			l++
		}
	}
	return nums
}
