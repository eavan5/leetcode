//vue3 diff核心算法

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let len = nums.length
	let result = [0]
	let lastIndex
	let start, end, middle
	for (let i = 0; i < len; i++) {
		const numsI = nums[i]
		lastIndex = result.at(-1)
		if (nums[lastIndex] < numsI) {
			result.push(i)
			continue
		}
		start = 0
		end = result.length - 1
		while (start < end) {
			middle = Math.floor((start + end) / 2)
			if (nums[result[middle]] < numsI) {
				start = middle + 1
			} else {
				end = middle
			}
		}
		if (numsI < nums[result[end]]) {
			result[end] = i
		}
	}
	return result.length
}
