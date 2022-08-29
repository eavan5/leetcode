/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const len = nums.length
	const target = len - k
	let left = 0,
		right = len - 1
	while (true) {
		const pivot = partition(nums, left, right)
		if (pivot === target) {
			return nums[target]
		} else if (pivot > target) {
			right = pivot - 1
		} else {
			left = pivot + 1
		}
	}
}

function partition(arr, l, r) {
	const pivot = l++
	while (l <= r) {
		if (arr[l] > arr[pivot]) {
			;[arr[l], arr[r]] = [arr[r], arr[l]]
			r--
		} else {
			l++
		}
	}
	;[arr[pivot], arr[r]] = [arr[r], arr[pivot]]
	return r
}
