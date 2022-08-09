/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	const res = []
	let [left, right] = [0, nums.length - 1]
	while (left <= right) {
		const l = nums[left] ** 2,
			r = nums[right] ** 2
		if (l > r) {
			res.unshift(l)
			left++
		} else {
			res.unshift(r)
			right--
		}
	}
	return res
}
