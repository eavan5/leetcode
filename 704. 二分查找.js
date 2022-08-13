/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let [left, right] = [0, nums.length - 1]
	while (left <= right) {
		const mid = (left + right) >> 1
		if (target < nums[mid]) {
			right = mid - 1
		} else if (target > nums[mid]) {
			left = mid + 1
		} else {
			return mid
		}
	}
	return -1
}
