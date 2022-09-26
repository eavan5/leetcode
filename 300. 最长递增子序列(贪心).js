/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let n = nums.length,
		f = [],
		pos = 0
	for (let i = 0; i < n; i++) {
		let l = 0,
			r = pos
		while (l < r) {
			let m = (l + r) >> 1
			if (f[m] < nums[i]) l = m + 1
			else r = m
		}
		if (l == pos) pos++
		f[l] = nums[i]
	}
	return pos
}
